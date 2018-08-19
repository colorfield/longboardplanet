import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/NotFound'
import Preview from '@/components/Preview'
import Spot from '@/components/Spot'
import Page from '@/components/Page'
import Splash from '@/components/Splash'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'splash' }
    },
    {
      path: '/splash',
      name: 'splash',
      component: Splash
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '/spot/:uid',
      name: 'spot',
      component: Spot
    },
    {
      path: '/page/:uid',
      name: 'page',
      component: Page
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})

export default router
