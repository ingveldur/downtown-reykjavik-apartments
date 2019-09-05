import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _203743d4 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3fef1e99 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/about",
      component: _203743d4,
      name: "about"
    }, {
      path: "/",
      component: _3fef1e99,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
