import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a8ad7a02 = () => interopDefault(import('../pages/awards.vue' /* webpackChunkName: "pages/awards" */))
const _6f66dd59 = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _01515d84 = () => interopDefault(import('../pages/location.vue' /* webpackChunkName: "pages/location" */))
const _3fef1e99 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/awards",
      component: _a8ad7a02,
      name: "awards"
    }, {
      path: "/gallery",
      component: _6f66dd59,
      name: "gallery"
    }, {
      path: "/location",
      component: _01515d84,
      name: "location"
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
