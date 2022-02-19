<template>
    <div>
        <div style="margin-top: 100px;" class="container">
        <el-card shadow="always" style="margin-bottom: 50px;">
            <div class="container" style="padding: 15px;">
                <h3>Administrator Account Registration</h3>
                <el-steps :active="active">
                    <el-step title="User Information" description="Here you can provide user information"></el-step>
                    <el-step title="User Credentials Safety Check" description="Fill up the security questions and answers"></el-step>
                    <el-step title="Data Preview" description="Here you can preview the informations you provide"></el-step>
                </el-steps>
                <div v-if="active == 1">
                    <h4 style="margin-top: 50px;">Primary Information</h4>
                    <hr>
                    <UserInfo :adminTask="adminTask" :rules="rules" :onNextInfo="onNextInfo" />
                </div>
                <div v-else-if="active == 2">
                    <h4 style="margin-top: 50px;">User Credentials & Security Questions and Answers</h4>
                    <hr>
                    <UserCredentials :adminTask="adminTask" :rules="rules" :onNextInfo="onNextInfo" :onBack="onBack" />
                </div>
                <div v-else-if="active == 3">
                    <h4 style="margin-top: 50px;">Data Preview</h4>
                    <hr>
                   <DataPreview :fullscreenLoading="fullscreenLoading"  :adminTask="adminTask" :rules="rules" :onFinish="onFinish" :onNextInfo="onNextInfo" :onBack="onBack" />
                </div>
            </div>
        </el-card>
    </div>
    </div>
</template>

<script>
import UserInfo from "@/components/AdminRegistration/userInfo"
import UserCredentials from "@/components/AdminRegistration/usercredentials"
import DataPreview from "@/components/AdminRegistration/dataPreview"
import {mapGetters} from "vuex"
export default {
    components : {
        UserInfo, UserCredentials, DataPreview
    },
    computed: {
        ...mapGetters({
            getregResponse: 'getregResponse'
        })
    },
    data (){
        var checkPhone = (rule, value, callback) => {
            const phoneReg = /^(09|\+639)\d{9}$/
            if (!value) {
              return callback(new  Error('Please provide valid contact number'))
            }
            setTimeout(() => {
              
              if (!Number.isInteger(+value)) {
                callback(new  Error('Please enter 11 digit number'))
              } else {
                if (phoneReg.test(value)) {
                  callback()
                } else {
                  callback(new  Error('The phone number format is incorrect'))
                }
              }
            }, 100)
          }
    
        return {
             active : 3,
            adminTask : {
                firstname : 'admin fname', lastname: 'admin lname',     primary_address : 'test', secondary_address: '', mdbranch: 'Batino',
                contactNumber: '09300323216', email: 'admin@gmail.com', username: 'admin', password: 'admin', conpass: '',
                sec_question : 'test', sec_answer: 'test',  admintrigger: 1
            },
            optionsQuestions: [],
            optionsBranch: [],
            rules: {
                firstname : [
                    {required : true, message: 'Please enter firstname'}
                ],
                lastname : [
                    {required: true, message: 'Please enter lastname'}
                ],
                primary_address: [
                    {required: true, message: 'Please provide your primary address'}
    
                ],
                secondary_address: [
                    {required: false, }
                ],
                mdbranch: [
                    {required: false, }
                ],
                contactNumber: [
                    {validator: checkPhone, trigger: 'blur'},
                    {required: true, message: 'Please provide valid contact number', trigger: 'change' },
                    { min: 11, max: 11, message: 'Please enter 11 digit number', trigger: 'change'}
                ],
                email: [
                    {type: 'string',required: true,message: 'Please enter email address',trigger: 'blur'},
                    {required: true, type: 'email', message: 'Please provide a valid email address',trigger: 'change'}
                ],
                username : [
                    {required: true, message: 'Please provide your username'}
                ],
                password : [
                    {required: true, message: 'Please provide your password'}
                    
                ],
                conpass : [
                    {required: true, message: 'Please confirm your password'}
                ],
                sec_question: [
                    {required: true, message: 'Please select security question', trigger: 'blur'}
                ], sec_answer: [
                    {required: true, message : 'Please provide security answer'}
                ]
            },
            fullscreenLoading: false
        }
    },
    methods : {
        onFinish: function(){
            this.$confirm('Are you sure you want to save this as admin?', 'Warning', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
              }).then(() => {
                  this.fullscreenLoading = true
                  setTimeout(() => {
                      this.$store.dispatch(`ACTIONS_ADMINREG`, {
                          obj : this.adminTask
                      }).then(() => {
                          console.log(this.getregResponse[0].key)
                         if(this.getregResponse[0].key === "success_registration") {
                             this.fullscreenLoading = false
                                  this.$notify.success({
                                    title: 'Success',
                                    message: 'Successfully Registered',
                                    offset: 100
                                });
                                  this.$router.push({name : 'Home'}).catch(() => {})
                         }
                      })
                  }, 2000)
              })
        },
        onNextInfo: function(formName){
            if(this.adminTask.password!== this.adminTask.conpass)
            {
                this.$notify.error({
                    title: 'Error',
                    message: 'Password doesn\'t match', 
                    offset: 100
                  });
            }
            else
            {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.active++;
                } else {
                    return false;
                }
                });
                
            }
        }, 
        onBack: function(){
            if(this.active == 1){
                return false;
            }else{
                this.active--;
            }
        },
    }
}
</script>