<template>
    <div>
    <i class="fas fa-user"></i><label>{{label}}</label>
    <div v-if="trigger == 1">
         <input 
    :type="type" 
    :placeholder="placeholder"
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
    style="margin-top: 10px; margin-bottom: 10px;"
    class="form-control">
    </div>
    <div v-else>
        
    </div>
    </div>
</template>

<script>
export default {
    props : {
        label : String,
        type: String,
        placeholder: String,
        trigger: String
    }
}
</script>   