<template>
    <div>
        <div class="container">
             <Admintitle 
                title="User Access Management | Add User"
                description="Here you can add new user"
                />
            <el-card shadow="always">
                <el-steps :active="active" align-center>
                <el-step title="Basic Information" 
                description="Provide user basic information"></el-step>
                <el-step title="User Credentials/ Security Questions" description="Provide user credentials"></el-step>
                <el-step title="Data Preview" description="Review user's info before saving"></el-step>
                </el-steps>
            <div v-if="active == 1">
                <UserForm :userInfo="info[0].userInfo" :SAInfo="info[0].SAInfo" />
                <el-button type="primary" style="float:right; margin:10px;" @click="onNext">Next</el-button>
            </div>
            <div v-else-if="active == 2">
                <UserCredentials :credentialsInfo="info[0].credentialsInfo"/>
                <el-button type="primary" style="float:right; margin:10px;" @click="onNext">Next</el-button>
                <el-button type="primary" style="float:right; margin:10px;" @click="onBack">Back</el-button>
            </div>
             <div v-else-if="active == 3">
                <!-- <DataPreview :userInfo="info[0].userInfo"/> -->
                <el-button type="primary" style="float:right; margin:10px;" @click="onSave">Save</el-button>
                <el-button type="primary" style="float:right; margin:10px;" @click="onBack">Back</el-button>
            </div>
            </el-card> 
       </div>
    </div>
</template>

<script>
import Admintitle from "@/components/admin/admin_title"
import UserForm from "@/components/admin/addUser/addUser"
import UserCredentials from "@/components/admin/addUser/userCredentials"
import DataPreview from "@/components/admin/addUser/dataPreview"
import {PUSH_BRANCHES, GET_BRANCHES, PUSH_QUESTIONS, GET_QUESTIONS} from "@/store/types"
import {mapGetters, mapActions} from 'vuex'
import sys from "@/store/validation"
export default {
    components: {
        Admintitle, UserForm, UserCredentials, DataPreview
    },
    data(){
        return {
            active : 1,
            info : [
                   {
                    userInfo : {
                        firstname : 'w', lastname: 'w', PA: 'w',  
                        contactnum: '123', email : '', 
                        branches : [], branch : ''
                    },
                    SAInfo : {
                        SA : '',
                    },
                    credentialsInfo : {
                        username : '', password : '', conPass : '',
                        userType: '', questions : [], secAnswer: '', secQuestions: ''
                    }
                   }
            ]
        }
    },
    computed : {
      ...mapGetters({
            getBranch : GET_BRANCHES,
            getQuestion: GET_QUESTIONS
      })
    },
    created(){
        this.fetchBranches({
            val : true
        })
        setTimeout(() => {
            this.info[0].userInfo.branches = this.getBranch.key
        }, 2000),

        this.fetchQuestions({
            val : true
        })
        setTimeout(() => {
            this.info[0].credentialsInfo.questions = this.getQuestion.key
        }, 2000)
    },
    methods : {
        ...mapActions({
            fetchBranches : PUSH_BRANCHES,
            fetchQuestions : PUSH_QUESTIONS
            }), 
            onNext() {
                
                sys.user_acces_management_validation_primaryinfo(this.info)
                // .then((r) => {
                //     console.log(r)
                // })
            },
            onBack: function(){
            if(this.active == 1){
                return false;
            }else{
                this.active--;
            }
        }   

    }
}
</script>