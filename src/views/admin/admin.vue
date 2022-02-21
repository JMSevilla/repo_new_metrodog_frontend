<template>
    <div>
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <AdminNav />
            <div class="app-main">
                <AdminSideBar />
                    <div class="app-main__outer">
                        <div class="app-main__inner">
                            <router-view></router-view>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminNav from "@/components/admin/admin_nav"
import AdminSideBar from "@/components/admin/admin_sidebar"
export default {
    components : {
        AdminNav, AdminSideBar
    }
}
</script>