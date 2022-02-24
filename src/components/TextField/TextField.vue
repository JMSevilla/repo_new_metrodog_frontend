<template>
    <div>
    <i></i><label>{{label}}</label>
    <div v-if="trigger == 1">
         <input 
    :type="type" 
    :placeholder="placeholder"
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
    style="margin-bottom: 10px;"
    class="form-control">
    </div>
    <div v-else>
         <textarea 
            :type="type" 
            :placeholder="placeholder"
            v-bind="$attrs"
            @input="$emit('textarea', $event.target.value)"
            style="margin-bottom: 10px;"
            class="form-control"></textarea>
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