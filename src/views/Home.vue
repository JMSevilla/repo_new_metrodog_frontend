<template>
  <div>
<div style="margin-top: 150px; margin-bottom: 80px;" class="container">
    <div class="row">
      <div style="margin-left: -70px;" class="col-sm">

        </div>
        <div class="col-sm">
               <el-card style="width: 115%;" shadow="always">
              <center>
                 <img src="@/assets/metrodogs logo.jpg" style="width: 50%; height: auto;" class="img-fluid" alt="No image">
                  </center>
              <Form  :taskObject="taskObject" :fullscreenLoading="screenLoading" :onLogin="onLogin" />
               <el-link type="primary" style="margin-left:75%;"  data-toggle="modal" data-target="#exampleModalCenter">Forget Password?</el-link>
              </el-card>
             
             </div>
             <div class="col-sm">
            
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Form from "@/components/Form"
import SystemValidation from "@/store/validation"
import {mapGetters, mapActions} from "vuex"
export default {
  components: {
    Form
  },
  computed : {
    ...mapGetters({
      getLoginResponse :'getLoginResponse',
      screenLoading : 'screenLoading'
    }),
    
  },
  data(){
    return {
      taskObject: {
        username : '', password : '', loginTrigger: 1
      }, fullscreenLoading : false, 
      scanObj: {
        tokenName : localStorage.getItem('key_identifier'),
        scanCookie : true
      }
    }
  }, 
  created(){
    this.onScanToken({
      obj: this.scanObj
    })
  },
  methods: {
    ...mapActions({
      onLogin : 'ACTIONS_LOGIN',
      onScanToken : 'ACTIONS_TOKEN'
      }),
    
  }
}
</script>