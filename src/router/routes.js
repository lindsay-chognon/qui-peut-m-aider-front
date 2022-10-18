
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'prestations', name:'prestations', component: () => import('pages/PrestationsPage.vue') },
      { path: 'prestation/:id', props: true, name:'prestation', component: () => import('pages/PrestationDetailsPage.vue') },
      { path: 'prestation/add', name:'prestationAdd', component: () => import('pages/PrestationAddPage.vue') },
      { path: 'login', name:'login', component: () => import('pages/LoginPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
