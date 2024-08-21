
import { createWebHistory, createRouter } from 'vue-router';
import PageB from "@/components/PageB.vue"

const routes = [
    {
        paht: "/",
        name: "homeView",
        component: ()=> import("@/components/HomeView.vue"),
    },
    {
        path: '/A',
        name: 'PageA',
        component: ()=> import("@/components/PageA.vue"), // 동적 import
    },
    {
        path: '/B',
        name: 'PageB',
        component: PageB
    },
]

// 이거안댐 error => export 'default' (imported as 'router') was not found in './router' (possible exports: router)
// export const router = createRouter({
//     history: createWebHistory(),
//     routes,
//   });

  // 이렇게 해도 된다.
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

