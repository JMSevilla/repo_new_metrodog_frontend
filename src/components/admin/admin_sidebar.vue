<template>
  <div>
    <div class="app-sidebar sidebar-shadow">
      <div class="app-header__logo">
        <div class="logo-src"></div>
        <div class="header__pane ml-auto">
          <div>
            <button
              type="button"
              class="hamburger close-sidebar-btn hamburger--elastic"
              data-class="closed-sidebar">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="app-header__mobile-menu">
        <div>
          <button
            type="button"
            class="hamburger hamburger--elastic mobile-toggle-nav"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div class="app-header__menu">
        <span>
          <button
            type="button"
            class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
            <span class="btn-icon-wrapper">
              <i class="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </span>
      </div>
      <div class="scrollbar-sidebar">
        <div class="app-sidebar__inner">
          <ul class="vertical-nav-menu">
            <li class="app-sidebar__heading">Dashboards</li>
            <li>
              <a class="mm-active">
                <i class="metismenu-icon pe-7s-rocket"></i>
                Dashboard
              </a>
            </li>

            <li class="app-sidebar__heading">User Access Management</li>
            <li>
              <a class="mm-active">
                <i class="metismenu-icon pe-7s-user"> </i>Manage Users
              </a>
              <a class="mm-active" style="cursor: pointer;" @click="onadduser">
                <i class="metismenu-icon pe-7s-add-user"> </i>Add User
              </a>
            </li>

            <li class="app-sidebar__heading">Inventory Management</li>
            <li>
              <a class="mm-active">
                <i class="metismenu-icon pe-7s-users"></i>
                Suppliers
              </a>
              <a class="mm-active">
                <i class="metismenu-icon pe-7s-shopbag"></i>
                Products
              </a>
            </li>
             <li class="app-sidebar__heading">Supplier Management</li>
            <li>
              <a style="cursor:pointer;" @click="onTransactionHistory()" class="mm-active">
                <i class="metismenu-icon pe-7s-users"></i>
                Sales Order
              </a>
              <a style="cursor:pointer;" @click="onTransactionHistory()" class="mm-active">
                <i class="metismenu-icon pe-7s-users"></i>
                Transaction History
              </a>
            </li>
            <li class="app-sidebar__heading">Reports Management</li>
            <li>
              <a class="mm-active">
                <i class="metismenu-icon pe-7s-note2"></i>
                Sales Report
              </a>

              <a class="mm-active">
                <i class="metismenu-icon pe-7s-notebook"></i>
                Inventory Reports
              </a>

              <a class="mm-active">
                <i class="metismenu-icon pe-7s-cash"></i>
                Payroll Reports
              </a>
            </li>
            <li class="app-sidebar__heading">Expenses Management</li>

            <li>
              <a class="mm-active">
                <i class="metismenu-icon pe-7s-piggy"></i>
                Bills Expenses
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onTransactionHistory() {
      this.$router.push({ name: "TransactionHistory" }).catch(() => {});
    },
    onadduser: function() {
      this.$router.push({name : 'Add User'}).catch(() => {})
    }
  },
};
</script>
