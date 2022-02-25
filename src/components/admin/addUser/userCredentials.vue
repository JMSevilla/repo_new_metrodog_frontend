<template>
    <div>
        <div class="row">
            <div class="col-sm">
                <TextField
                label="Username"
                type="text"
                placeholder="Enter Username"
                trigger="1"
                v-model="credentialsInfo.username"
                style="margin-top: 15px;"
                 />
            </div>
            <div class="col-sm">
                 <TextField
                label="Password"
                type="password"
                clearable show-password
                placeholder="Enter Password"
                trigger="1"
                v-model="credentialsInfo.password"
                style="margin-top: 15px;"
                 />
            </div>

             <div class="col-sm">
                 <TextField
                label="Confirm Password"
                type="password"
                clearable show-password
                placeholder="Enter confirm password"
                trigger="1"
                v-model="credentialsInfo.conPass"
                style="margin-top: 15px; width: 100%;"
                 />
            </div>

        </div>
        <div class="row">
            <div class="col-sm">
                <label style="margin-top: 15px;">Select User Type</label>
               <el-select style="width: 100%; " v-model="credentialsInfo.userType" filterable placeholder="Select Branch">
                    <el-option value="1" label="Administrator">
                            </el-option>
                            <el-option value="2" label="Cashier">
                            </el-option>
                </el-select>
            </div>

            <div class="col-sm">
                <label style="margin-top: 15px;">Select Security Question</label>
               <el-select style="width: 100%; " v-model="credentialsInfo.secQuestions" filterable placeholder="Select Branch">
                    <el-option
                    v-for="item in credentialsInfo.questions"
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
                placeholder="Enter security answer"
                trigger="1"
                v-model="credentialsInfo.secAnswer"
                style="margin-top: 15px; width: 100%;"
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
        credentialsInfo : Object
    }
}
</script>