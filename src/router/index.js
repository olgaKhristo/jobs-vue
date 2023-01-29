import { createRouter, createWebHistory, useLink } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jobs/JobsView.vue'
import JobDetails from '../views/jobs/JobDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About    
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
//redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
   
  },
  //catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound    
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
