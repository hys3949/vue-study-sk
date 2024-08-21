import Vue from "vue"
import Router from "vue-router"
import HomeRouter from "@/components/HomeRouter.vue"
import AboutRouter from '@/components/AboutRouter.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeRouter',
      component: HomeRouter
    },
    {
      path: '/about',
      name: 'AboutRouter',
      component: AboutRouter
    }
  ]
});