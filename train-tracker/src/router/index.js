import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '@/views/UserLogin.vue';
import UserRegister from '@/views/UserRegister.vue';
import TrainDashboard from '@/views/TrainDashboard.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: UserLogin },
  { path: '/register', component: UserRegister },
  { path: '/dashboard', component: TrainDashboard }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

