// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/User'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "products" */ '@/views/ProductsView.vue'),
        meta: {
          guard: 'auth'
        },
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue'),
      },
      // {
      //   path: '/about#aboutSection',
      //   name: 'About',
      //   // route level code-splitting
      //   // this generates a separate chunk (about.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue'),
      // },
      {
        path: '/contact',
        name: 'Contact',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/ContactView.vue'),
      },
      {
        path: '/singleproduct/:id',
       name: 'singleproduct',
       component: () => import(/* webpackChunkName: "singleproduct" */ '@/views/SingleProductView.vue'),
        meta: {
          guard: 'auth'
        },

     },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "Cart" */ '@/views/CartView.vue'),
        meta: {
          guard: 'auth'
        },
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */ '@/views/LoginView.vue'),
        meta:{
          guard:'vistor'
        }
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "Profile" */ '@/views/ProfileView.vue'),
        meta: {
          guard: 'auth'
        },
      },
      {
      path: '/:pathMatch(.*)*',
      name: 'Not Found',
      component: () => import("@/views/NotFoundView.vue")
      }


    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/app-free/AppbarFree.vue'),
    children:[
      // {
      //   path: '/admin',
      //   name: 'Admin',
      //   component: () => import(/* webpackChunkName: "Admin" */ '@/views/AdminView.vue'),

      // },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/DashboardView.vue'),

      },
      {
        path: '/productInfo',
        name: 'ProductInfo',
        component: () => import(/* webpackChunkName: "ProductInfo" */ '@/views/ProductInfoView.vue'),

      },
      {
        path: '/userInfo',
        name: 'UserInfo',
        component: () => import(/* webpackChunkName: "UserInfo" */ '@/views/UserInfoView.vue'),

      },

    ]
  },

]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),

  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;

    }

     else if (to.hash) {
    //   const options =
    //  {top:document.querySelector(to.hash).offsetTop,
    //   behavior:'smooth'
    // }
    // window.scrollTo(options)
        return { selector: to.hash,
          behavior:'smooth'};
    }
return { top:500}
},

})
router.beforeEach(function (to, from, next) {
  const store = useUserStore()

  if (to.meta.guard === 'auth' && !store.isLoggedIn) {
    next('/login')
  }
  else if (to.meta.guard === 'vistor' && store.isLoggedIn) {
    next('/profile')
  }
  else
    next()
})


export default router
