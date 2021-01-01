
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/index', component: () => import('pages/Index.vue') },
      { path: '/resume', component: () => import('pages/Resume.vue') },
      { path: '/journey', component: () => import('pages/Journey.vue') },
      { path: '/projects', component: () => import('pages/Projects.vue') },
      { path: '/blog', component: () => import('pages/Blog.vue') },
      { path: '/resume', component: () => import('pages/Resume.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
