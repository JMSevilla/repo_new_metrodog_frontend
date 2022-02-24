<template>
    <div>
        <div class="app-page-title" style="margin-top : 10px;">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="pe-7s-user icon-gradient bg-mean-fruit">
                </i>
            </div>
            <div>{{title}}
                <div class="page-title-subheading">{{description}}
                </div>
            </div>
        </div>
        <div class="page-title-actions">
        </div>
    </div>
</div>
    </div>
</template>

<script>
export default {
    props : { 
        title : String, description : String
    }
}
</script>