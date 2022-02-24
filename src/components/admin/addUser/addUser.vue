<template>
    <div>
        <div class="row">
            <div class="col-sm">
                <TextField
                label="Firstname"
                type="text"
                placeholder="Enter firstname"
                trigger="1"
                v-model="userInfo.firstname"
                style="margin-top: 15px;"
                 />
            </div>
            <div class="col-sm">
                 <TextField
                label="Lastname"
                type="text"
                placeholder="Enter lastname"
                trigger="1"
                v-model="userInfo.lastname"
                style="margin-top: 15px;"
                 />
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <TextField
                label="Primary Address"
                type="text"
                placeholder="Enter primary address"
                trigger="2"
                v-model="userInfo.PA"
                style="margin-top: 15px; width: 100%;"
                 />
            </div>
            <div class="col-sm">
                 <TextField
                label="Secondary Address"
                type="text"
                placeholder="Enter secondary address"
                trigger="2"
                v-model="userInfo.SA"
                style="margin-top: 15px; width: 100%;"
                 />
            </div>
        </div>
          <div class="row">
            <div class="col-sm">
                <TextField
                label="Contact Number"
                type="number"
                placeholder="Enter contact number"
                trigger="1"
                v-model="userInfo.contactnum"
                style="margin-top: 15px; width: 100%;"
                 />
            </div>
            <div class="col-sm">
                 <TextField
                label="Email"
                type="email"
                placeholder="Enter email"
                trigger="1"
                v-model="userInfo.email"
                style="margin-top: 15px; width: 100%;"
                 />
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <label style="margin-top: 15px;">Select Branch</label>
               <el-select style="width: 100%; " v-model="userInfo.branch" filterable placeholder="Select Branch">
                    <el-option
                    v-for="item in userInfo.branches"
                    :key="item.branchName"
                    :label="item.branchName"
                    :value="item.branchName">
                    </el-option>
                </el-select>
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