<template>
    <div>
        <div class="container">
             <Admintitle 
                title="User Access Management | Add User"
                description="Here you can add new user"
                />
            <el-card shadow="always">
                <h5>User Form</h5>
                <el-steps :active="active" align-center>
                <el-step title="Basic Information" 
                description="Provide user basic information"></el-step>
                <el-step title="Step 2" description="Some description"></el-step>
                <el-step title="Step 3" description="Some description"></el-step>
                <el-step title="Step 4" description="Some description"></el-step>
                </el-steps>
            <div v-if="active == 1">
                <UserForm :userInfo="userInfo" />
            </div>
            </el-card> 
       </div>
    </div>
</template>

<script>
import Admintitle from "@/components/admin/admin_title"
import UserForm from "@/components/admin/addUser/addUser"
import {PUSH_BRANCHES, GET_BRANCHES} from "@/store/types"
import {mapGetters, mapActions} from 'vuex'
export default {
    components: {
        Admintitle, UserForm
    },
    data(){
        return {
            active : 1,
            userInfo : {
                firstname : '', lastname: '', PA: '', SA : '', 
                contactnum: '', email : '', 
                branches : []
            }
        }
    },
    computed : {
      ...mapGetters({
            getBranch : GET_BRANCHES
      })
    },
    created(){
        this.fetchBranches({
            val : true
        })
        setTimeout(() => {
            this.userInfo.branches = this.getBranch.key
        }, 2000)
    },
    methods : {
        ...mapActions({
            fetchBranches : PUSH_BRANCHES
            })
    }
}
</script>