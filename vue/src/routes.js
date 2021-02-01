import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Album from "@/views/Album.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Albums' } },
  { path: '/album/:artist/:title',
    component: Album,
    name: 'Album' },

  { path: '/:path(.*)', component: NotFound },
]
