<template>
    <div>
        <div style="margin-top: 20px; margin-bottom: 30px; " class="container">
        <el-card shadow="always" style="padding: 50px;">
            <center>
                <img src="@/assets/metrodogs logo.jpg" alt="metrodogs logo" style="width:20%; height: 20%;">
            </center>
            <h2 style="text-align:center; text-transform: uppercase;">~ welcome {{getSetterInfo.fname}} , please select system ~</h2>
            <hr style="margin-bottom:50px;">

            <div class="row">
                <div class="col-6">
                    <el-card style="cursor: pointer;" shadow="always"  >
                        <img class="card-img-top" style="width:78%;" src="@/assets/adminselect.webp" alt="Administrator Image">
                        <div class="card-block ">
                            <p class="card-text "><small class="text-muted">click to proceed to admin dashboard</small></p>
                            <el-button @click="PUSH_ADMIN_DASHBOARD({object : adminSelection})" v-loading.fullscreen.lock="screenLoading" style="width: 100%;" plain type="primary" size="small">CONTINUE</el-button>
                        </div>
                    </el-card>
                </div>

                <div class="col-6">
                    <el-card style="cursor: pointer;" shadow="always">
                        <img class="card-img-top" style="width:100%;" src="@/assets/payrollselect.jpg" alt="Payroll System Image">
                        <div class="card-block ">
                            <p class="card-text "><small class="text-muted">click to proceed to payroll system</small></p>
                        </div>
                    </el-card>
                </div>
            </div>
            <div class="row">
                <div class="col-4">

                </div>

                <div class="col-4">
                    <el-card style="margin-top:20px;margin-bottom: 20px;" shadow="always">
                        <center>
                            <h5>Logged in as : {{getSetterInfo.role}}</h5>
                            <span>User: {{getSetterInfo.fname + " " + getSetterInfo.lname}}</span>
                        </center>
                    </el-card>
                    <button class="btn btn-block btn-danger" v-loading.fullscreen.lock="screenLoading"> Logout</button>
                </div>

                <div class="col-4">

                </div>

            </div>
        </el-card>
    </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    data: () => ({
          adminSelection : {
              platformTrigger : true,
              owner : localStorage.getItem('key_identifier') ? localStorage.getItem('key_identifier') : 'unknown'
          }
    }),
    created() {
        this.GET_USERINFO({object : JSON.parse(localStorage.getItem("info"))[0]})
        },
        computed : {
            ...mapGetters({
                getSetterInfo : 'getSetterInfo',
                screenLoading: 'screenLoading'
            })
        },
        
        methods : {
            ...mapActions({
                GET_USERINFO: 'GET_USERINFO',
                PUSH_ADMIN_DASHBOARD: 'PUSH_ADMIN_DASHBOARD'
            }),
        }
}
</script>