<template>
    <div>
        <!--Basic Informations -->
        <div class="row">
            <div class="col-sm">
                <TextField
                label="Firstname"
                type="text"
                disabled="true"
                trigger="1"
                v-model="userInfo.firstname"
                style="margin-top: 10px;"
                 />
            </div>
            <div class="col-sm">
                 <TextField
                label="Lastname"
                type="text"
                disabled="true"
                trigger="1"
                v-model="userInfo.lastname"
                style="margin-top: 10px;"
                 />
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <TextField
                label="Primary Address"
                type="text"
                disabled="true"
                trigger="2"
                v-model="userInfo.PA"
                style="margin-top: 10px; width: 100%;"
                 />
            </div>
            <div class="col-sm">
                 <TextField
                label="Secondary Address"
                type="text"
                disabled="true"
                trigger="2"
                v-model="userInfo.SA"
                style="margin-top: 10px; width: 100%;"
                 />
            </div>
        </div>
          <div class="row">
            <div class="col-sm">
                <TextField
                label="Contact Number"
                type="number"
                disabled="true"
                trigger="1"
                v-model="userInfo.contactnum"
                style="margin-top: 10px; width: 100%;"
                 />
            </div>
            <div class="col-sm">
                 <TextField
                label="Email"
                type="email"
                disabled="true"
                trigger="1"
                v-model="userInfo.email"
                style="margin-top: 10px; width: 100%;"
                 />
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <label style="margin-top: 10px;">Branch</label>
               <el-select style="width: 100%; " v-model="userInfo.branch" filterable disabled="true">
                    <el-option
                    v-for="item in userInfo.branches"
                    :key="item.branchName"
                    :label="item.branchName"
                    :value="item.branchName">
                    </el-option>
                </el-select>
            </div>
        </div>

        <!-- User Credentials -->
        <div class="row">
            <div class="col-sm">
                <TextField
                label="Username"
                type="text"
                disabled="true"
                trigger="1"
                v-model="userInfo.username"
                style="margin-top: 10px;"
                 />
            </div>
            <div class="col-sm">
                 <TextField
                label="Password"
                type="password"
                disabled="true"
                clearable show-password
                trigger="1"
                v-model="userInfo.password"
                style="margin-top: 10px;"
                 />
            </div>

             <div class="col-sm">
                 <TextField
                label="Confirm Password"
                type="password"
                disabled="true"
                clearable show-password
                trigger="1"
                v-model="userInfo.conPass"
                style="margin-top: 10px; width: 100%;"
                 />
            </div>

        </div>
        <div class="row">
            <div class="col-sm">
                <label style="margin-top: 10px;">User Type</label>
               <el-select style="width: 100%; " v-model="userInfo.userType" filterable disabled="true">
                    <el-option value="1" label="Administrator">
                            </el-option>
                            <el-option value="2" label="Cashier">
                            </el-option>
                </el-select>
            </div>

            <div class="col-sm">
                <label style="margin-top: 10px;">Security Question</label>
               <el-select style="width: 100%; " v-model="userInfo.secQuestions" filterable disabled="true">
                    <el-option
                    v-for="item in userInfo.questions"
                    :key="item.question"
                    :label="item.question"
                    :value="item.question">
                    </el-option>
                </el-select>
            </div>

            <div class="col-sm">
                 <TextField
                label="Security Answer"
                type="text"
                disabled="true"
                trigger="1"
                v-model="userInfo.secAnswer"
                style="margin-top: 10px; width: 100%;"
                 />
            </div>
        </div>
  
    </div>
    
</template>

<script>
import TextField from "@/components/TextField/TextField"
export default {
    components : {
        TextField
    },
    props : {
        userInfo : Object
    }
}
</script>