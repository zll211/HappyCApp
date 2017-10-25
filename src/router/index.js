import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Course from '../pages/course'
import About from '../pages/about'
import Job from '../pages/job'
import Teacher from '../pages/teacher'
import Environment from '../pages/environment'
import Form from '../pages/form'
import News from '../pages/news'
import News2 from '../pages/news2'
import Kc from '../pages/kc'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Course',
      component: Course
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/Job',
      component: Job
    },
    {
      path: '/Teacher',
      component: Teacher
    },
    {
      path: '/Environment',
      component: Environment
    },
    {
      path: '/Form',
      component: Form
    },
    {
    	name:"news",
      path: '/News',
      component: News
    },
    {
    	name:"news2",
      path: '/News2',
      component: News2
    },
    {
    	name:"kc",
      path: '/Kc',
      component: Kc
    }
  ]
})
