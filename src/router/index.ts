import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import ProjectView from '../views/Project.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:id',
    name: 'Project',
    component: ProjectView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.name === 'Home' && savedPosition) {
      return {
        top: savedPosition?.top,
        behavior: 'smooth',
      };
    }
    return undefined;
  },
});

export default router;
