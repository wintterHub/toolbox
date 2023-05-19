const common = [
  {
    path: '/UrlBatchGenerat',
    name: 'UrlBatchGenerat',
    component: () => import('@/views/UrlBatchGenerat/UrlBatchGenerat.vue')
  },
  {
    path: '/ImageCompress',
    name: 'ImageCompress',
    component: () => import('@/views/ImageCompress/ImageCompress.vue')
  },
  {
    path: '/ShortLink',
    name: 'ShortLink',
    component: () => import('@/views/ShortLink/ShortLink.vue')
  }
]

export default common
