
import {PUSH_LOGOUT, 
    MUTATE_LOGOUT, 
    GET_LOGOUT, 
    SCREEN_LOADER,
    MUTATE_LOGOUT_VALIDATE} from "../../../types"
import client from "../../../httpauth"
import handler from "../../../handling"
import Element from 'element-ui'
import router from '../../../../router/index'

export const state = { 
    logoutResponse : null,
    screenLoadingAdminLogout : false
}

export const mutations = { 
    [MUTATE_LOGOUT] : (state, data) => {
         return state.logoutResponse = data
    },
    [MUTATE_LOGOUT_VALIDATE] : (state, data) => {
        if(data === 'logout_success') {
            state.screenLoadingAdminLogout = false
            router.push({ name : 'Home'})
            .catch(() => {})
        }
    }
}

export const getters = { 
    [GET_LOGOUT] : (state) => {
        return state.logoutResponse
    },
    [SCREEN_LOADER] : (state) => {
        return state.screenLoadingAdminLogout
    }
}

export const actions = { 
    [PUSH_LOGOUT] : ({commit, state}, {object}) => {
        Element.MessageBox.confirm('Are you sure you want to logout ?', 'Logout', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'error'
          }).then(() => {
            state.screenLoadingAdminLogout = true
            setTimeout(() => {
                const request = client.HTTP().post(`/api/logout.php`, handler.HTTPHandling(object))
                return request.then(( { data } ) => {
                   commit(MUTATE_LOGOUT_VALIDATE, data[0].key)
                })
            }, 2000)
          })
    }
}