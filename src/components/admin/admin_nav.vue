<template>
    <div>
        <div class="app-header header-shadow">
        <div class="app-header__logo">
            <img src="@/assets/metrodogs logo.jpg" style="width: 25%; height: auto;" class="img-fluid" alt="">
            <el-tag type="success" size="small" style="margin-left: 40px;">BETA v1.0</el-tag>
            <div class="header__pane ml-auto">
                <div>
                    <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" @click="onClickBurger()" data-class="closed-sidebar" >
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="app-header__mobile-menu">
            <div>
                <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-header__menu">
            <span>
                <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                    <span class="btn-icon-wrapper">
                        <i class="fa fa-ellipsis-v fa-w-6"></i>
                    </span>
                </button>
            </span>
        </div>
        <div class="app-header__content" style="margin-left: 50px;">
            <div class="app-header-left">
                <ul class="header-menu nav">
                    <li class="nav-item">
                        <a href="javascript:void(0);" class="nav-link">
                            <i class="nav-link-icon fa fa-database"> </i>
                            Statistics
                        </a>
                    </li>
                    <li class="btn-group nav-item">
                        <a href="javascript:void(0);" class="nav-link">
                            <i class="nav-link-icon fa fa-edit"></i>
                            Projects
                        </a>
                    </li>
                    <li class="dropdown nav-item">
                        <a href="javascript:void(0);" class="nav-link">
                            <i class="nav-link-icon fa fa-cog"></i>
                            Settings
                        </a>
                    </li>
                </ul>
            </div>
            <div class="app-header-right">
                <div class="header-btn-lg pr-0">
                    <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                            <div class="widget-content-left">
                                <div class="btn-group">
                                    <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn">
                                        <img width="42" class="rounded-circle" src="assets/images/avatars/1.jpg" alt="">
                                        <i class="fa fa-angle-down ml-2 opacity-8"></i>
                                    </a>
                                    <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                                        <button type="button" tabindex="0" class="dropdown-item"><i class="fas fa-user"></i>&nbsp;User Account</button>
                                        <button type="button" tabindex="0" class="dropdown-item"><i class="fas fa-cog"></i>&nbsp;Settings</button>
                                        <h6 tabindex="-1" class="dropdown-header">Header</h6>
                                        <button type="button" tabindex="0" class="dropdown-item" @click="PUSH_ADMINSELECTION({object : adminChangePlatform})" v-loading.fullscreen.lock="loadingscreen"><i class="fas fa-exchange-alt"></i>&nbsp;Change Platform</button>
                                        <div tabindex="-1" class="dropdown-divider"></div>
                                        <button type="button" tabindex="0" class="dropdown-item" @click ="ONLOGOUT({object : adminLogout})" v-loading.fullscreen.lock="screenLoaderadminLogout"><i class="fas fa-sign-out-alt"></i>&nbsp;Log Out</button>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-content-left  ml-3 header-user-info">
                                <div class="widget-heading">
                                    {{getSetterInfo.fname + " " + getSetterInfo.lname}}
                                </div>
                                <div class="widget-subheading">
                                    {{getSetterInfo.role}}
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import { PUSH_LOGOUT, SCREEN_LOADER } from "@/store/types"
export default {
    data: () => ({
          adminChangePlatform : {
              platformTrigger : true,
              owner : localStorage.getItem('key_identifier') ? localStorage.getItem('key_identifier') : 'unknown'
          },
          adminLogout: {
              logoutTrigger : true,
              owner : localStorage.getItem('key_identifier') ? localStorage.getItem('key_identifier') : 'unknown' 
          }
    }),
    created() {
        this.GET_USERINFO({object : JSON.parse(localStorage.getItem("info"))[0]})
        },
        computed : {
            ...mapGetters({
                getSetterInfo : 'getSetterInfo',
                screenLoaderadminLogout : SCREEN_LOADER,
                getSetterInfo : 'getSetterInfo',
                loadingscreen : 'loadingscreen',
            })
        },
        
        methods : {
            ...mapActions({
                GET_USERINFO: 'GET_USERINFO',
                PUSH_ADMINSELECTION: 'PUSH_ADMINSELECTION',
                ONLOGOUT : PUSH_LOGOUT
            }),
            onClickBurger: function(){
            document.body.classList.toggle('closed-sidebar');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('closed-sidebar'));
            }
           
        }
}
</script>
