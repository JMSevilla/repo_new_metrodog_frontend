import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
function makeid(length) {
  var result           = [];
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() *
charactersLength)));
 }
 return result.join('');
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home")
  },
  {
    path: '/adminregistration' + makeid(200),
    name: 'AdminReg',
    component: () => import("@/views/admin/adminRegistration")
  },
  {
    path: '/adminselection' + makeid(200),
    name: 'AdminSelection',
    component: () => import("@/views/adminSelection")
  },
  {
    path: '/admin' + makeid(200),
    name: 'Admin',
    component: () => import("@/views/admin/admin"),
    children: [
      {
        path : '/admin/dashboard' + makeid(200),
        name: 'Admin',
        component: () => import("@/views/admin/admin_contents/dashboard"),
      },
      {
        path : '/supplier/transactionHistory' + makeid(200),
        name: 'TransactionHistory',
        component: () => import("@/views/supplier/transactionHistory"),
      },
      {
        path : '/uam/adduser' + makeid(200),
        name: 'Add User',
        component: () => import("@/views/admin/admin_contents/admin_adduser"),
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
