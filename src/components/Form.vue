<template>
    <div>
        <TextField type="text" trigger="1" @keyup.enter.native="onLogin({obj : taskObject})" placeholder="Enter username" v-model="taskObject.username" />
        <TextField type="password" trigger="1" @keyup.enter.native="onLogin({obj : taskObject})" placeholder="Enter password" v-model="taskObject.password" />
        <el-button v-loading.fullscreen.lock="fullscreenLoading" type="primary" @click="onLogin({obj : taskObject})" style="margin-top: 10px; margin-bottom: 20px; width: 100%;">Login</el-button>
    </div>
</template>

<script>
import TextField from "@/components/TextField/TextField"
export default {
    components : {
        TextField
    },
    props : {
        taskObject : Object, fullscreenLoading: Boolean, onLogin: Function
    },
}
</script>