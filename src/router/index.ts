import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeaturedView from '../views/FeaturedView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import AuthorsView from '../views/AuthorsView.vue'
import AuthorDetailView from '@/views/AuthorDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/featured',
      name: 'featured',
      component: FeaturedView
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView
    },
    {
      path: '/authors',
      name: 'authors',
      component: AuthorsView
    },
    {
      path: '/author/:slug',
      name: 'author',
      component: AuthorDetailView,
      props: true,
    },
  ],
})

export default router
