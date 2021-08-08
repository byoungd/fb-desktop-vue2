function index() {
  return import(/* webpackChunkName: "page-index" */ '@/pages/index.vue')
}
function about() {
  return import(/* webpackChunkName: "page-about" */ '@/pages/about.vue')
}

export default [
  {
    name: 'index',
    path: '',
    component: index,
  },
  {
    name: 'about',
    path: 'about',
    component: about,
  },
]
