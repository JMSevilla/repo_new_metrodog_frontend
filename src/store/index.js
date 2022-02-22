import Vue from 'vue'
import Vuex from 'vuex'
import client from "./httpauth"
import d from "./handling"
import Element from 'element-ui'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginResponse : null,
    getuser_checkResponse : null,
    adminregistrationResponse : null,
    loginState : {
      username : '', password : '', screenLoading : false,
      info : [], tokenIdentifier : false, 
      setInfo : {
        role : '', fname : '', lname : ''
      }
    },
    securityManagement : {
      SavedPlatform : {
        platformResponse : null
      }
    }
  },
  getters: {
    getLoginResponse : (state) => {
      return state.loginResponse
    },
    getcheckuserResponse : (state) => {
      return state.getuser_checkResponse
    },
    getregResponse : (state) => {
      return state.adminregistrationResponse
    },
    screenLoading : (state) => {
      return state.loginState.screenLoading
    },
    tokenDoneScan : (state) => {
      return state.loginState.tokenIdentifier
    },
    getSetterInfo : (state) => {
      return state.loginState.setInfo
    },
    getSavedPlatform : (state) => {
      return state.securityManagement.SavedPlatform.platformResponse
    }
  },
  mutations: {
   MUTATE_LOGIN: (state, data) => {
     return state.loginResponse = data
   },
   MUTATE_CHECKUSER : (state, data) => {
     return state.getuser_checkResponse = data
   },
   MUTATE_ADMINREG: (state, data) => {
     return state.adminregistrationResponse = data
   },
   realtime_token : (state, data) => {
    let key = data.tokenName ? data.tokenName : 'unknown'
    if(!key || key == null || key === "unknown") {
      return state.loginState.tokenIdentifier = false;
    }else{
      return state.loginState.tokenIdentifier = true;
    }
   },
   MUTATE_GET_USERINFO : (state, data) => { 
    return {
    ...state.loginState.setInfo.fname = data.fname,
    ...state.loginState.setInfo.role = data.role,
    ...state.loginState.setInfo.lname = data.lname
    }
   },
   MUTATE_GET_SAVEDPLATFORM : (state, data) => {
     return state.securityManagement.SavedPlatform.platformResponse = data
   }
  },
  actions: {
    ACTIONS_LOGIN({state}, {obj}) {
      if(!obj.username || !obj.password){
        return Element.Notification.error({
          title: 'Empty username or password',
          message : 'Empty username or password , please try again',
          offset : 100
        })
      } 
      else 
      {
        state.loginState.screenLoading = true
        setTimeout(() => {
          const request = client.HTTP().post(`/api/login.php`, d.HTTPHandling(obj))
          request.then(response => {
            console.log(response.data)
            switch(true) {
              case response.data[0].key.message === 'success_admin':
                    Element.Notification.success({
                      title : 'Success' , message : 'Successfully Logged in', offset : 100
                    })
                    this.dispatch(`LoginLocalStorage`, {
                      username : obj.username,
                      response : response
                    })
                    state.loginState.screenLoading = false
                    router.push({name : 'AdminSelection'}).catch(() => {})
                    break;
              case response.data[0].key === "account_disabled":
                                        Element.Notification.warning({
                                            title: 'Warning',
                                            message: 'This account was disabled, please contact the admin',
                                            offset: 100
                                          });
                                          state.loginState.screenLoading = false
                                          return false
              case response.data[0].key === "invalid_password":
                                        Element.Notification.error({
                                            title: 'Error',
                                            message: 'Invalid Password',
                                            offset: 100
                                          });
                                          state.loginState.screenLoading = false
                                          return false
              case response.data[0].key === "account_not_found":
                                        Element.Notification.error({
                                            title: 'Error',
                                            message: 'This account was not found',
                                            offset: 100
                                          });
                                          state.loginState.screenLoading = false
                                          return false
            }
          })
        }, 2000)
      }
    },
    ACTIONS_TOKEN({commit, getters},{obj}){
      commit(`realtime_token`, obj)
      let decision = getters.tokenDoneScan
      if(decision) {
        let request = client.HTTP().post(`/api/CookieManagement.php`, d.HTTPHandling(obj))
        return request.then(( {data} )=> {
          console.log(data)
        })
      }
      else
      {
        return false
      }
    },
    async ACTIONS_CHECKUSER({commit}, {object}){
      return await new Promise((resolve) => {
        client.HTTP().post(`/api/checkuser.php`, d.HTTPHandling(object)).then((response )=> {
          return resolve(commit(`MUTATE_CHECKUSER`, response.data))
        })
      })
    },
    ACTIONS_ADMINREG({commit}, {obj}) {
      return new Promise((resolve) => {
        client.HTTP().post(`/api/adminRegistration.php`, d.HTTPHandling(obj)).then(r => {
          return resolve(commit(`MUTATE_ADMINREG`, r.data))
        })
      })
    },
    LoginLocalStorage({state},{username, response}) {
      localStorage.setItem('key_identifier', username)
      state.loginState.info.push({fname:response.data[0].key.fname,lname:response.data[0].key.lname,role:response.data[0].key.role})
      localStorage.setItem("info", JSON.stringify(state.loginState.info))
    },
    async CHECK_TOKEN({commit},{obj}){
      await client.HTTP().post(`/api/login.php`, d.HTTPHandling(obj))
      .then(resp => {
        console.log(resp.data)
       if(resp.data[0].key === 'invalid_token'){
        return router.push({name : 'Home'}).catch(() => {})
       }
       else if(resp.data[0].key === 'token_exist_admin_selection'){
         return router.push({name : 'AdminSelection'}).catch(() => {})
       }
      })
    },
    GET_USERINFO({commit}, {object}){
      commit(`MUTATE_GET_USERINFO`, object)
    },
     PUSH_ADMIN_DASHBOARD({commit, state}, {object}){
      state.loginState.screenLoading = true
      setTimeout(() => {
         client.HTTP().post(`/api/adminSelection.php`, d.HTTPHandling(object))
         .then(({data}) => {
          if(data[0].key === 'update_admin'){
            router.push({name : 'Admin'}).catch(() => {})
          }
        })
      }, 2000)
    },
    PUSH_ADMINSELECTION({commit, state}, {object}){
      state.loginState.screenLoading = false
      setTimeout(() => {
         client.HTTP().post(`/api/adminChangePlatform.php`, d.HTTPHandling(object))
         .then(({data}) => {
          if(data[0].key === 'update_to_adminselection'){
            router.push({name : 'AdminSelection'}).catch(() => {})
          }
        })
      }, 1000)
    },
    RETAIN_PLATFORM({commit, getters} , {object}) {
      const request = client.HTTP().post(`/api/getsavedplatform.php`, d.HTTPHandling(object))
      return request.then(( { data } ) => {
        commit(`MUTATE_GET_SAVEDPLATFORM`, data[0].key)
        if(getters.getSavedPlatform === 'to_platform_admin'){
          router.push({name : 'Admin'}).catch(() => {})
        } else if(getters.getSavedPlatform === 'to_platform_adminselection') {
          router.push({name : 'AdminSelection'}).catch(() => {})
        }
      })
    },
    LOGOUT_ADMINSELECTION({commit, state}, {object}) {
      Element.MessageBox.confirm('Are you sure you want to logout ?', 'Logout', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'error'
      }).then(() => {
        state.loginState.screenLoading = true
        setTimeout(() => {
          const request = client.HTTP().post(`/api/logout.php`, d.HTTPHandling(object))
          return request.then(({data}) => {
            if(data[0].key === 'logout_success') {
              state.loginState.screenLoading = false
              router.push({name : 'Home'}).catch(() => {})
            }
          })
        }, 2000)
      })
    }  
  },
  modules: {
  }
})
