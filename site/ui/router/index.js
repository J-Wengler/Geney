import Vue from 'vue'
import Router from 'vue-router'
import Components from 'components'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Components.Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Components.Login
    },
    {
      path: '/404',
      name: 'DatasetNotFound',
      component: Components.Error404
    },
    {
      path: '/dataset/:dataset/',
      name: 'Description',
      component: Components.Description
    },
    {
      path: '/dataset/:dataset/filter/',
      name: 'Filter',
      component: Components.Filter
    },
    {
      path: '/dataset/:dataset/filter/download',
      name: 'Download',
      component: Components.Download
    },
    {
      path: '/admin',
      redirect: '/admin/manage-datasets',
      name: 'Admin',
      component: Components.Admin,
      children: [
        {
          path: 'manage-datasets',
          name: 'ManageDatasets',
          component: Components.Datasets
        },
        {
          path: 'manage-users',
          name: 'ManageUsers',
          component: Components.Users
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: Components.Error404
    }

  ]
})
