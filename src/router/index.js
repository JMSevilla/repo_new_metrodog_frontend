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
]

const router = new VueRouter({
  routes
})

export default router
