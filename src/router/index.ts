import { createRouter, createWebHistory } from 'vue-router'
import SummaryView from '../views/SummaryView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'summary',
            component: SummaryView
        },
        {
            path: '/projects',
            name: 'projects',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/ProjectsView.vue')
        },
        {
            path: '/certs',
            name: 'certs',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/CertificationsView.vue')
        },
        {
            path: '/history',
            name: 'work-history',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/WorkHistoryView.vue')
        },
        {
            path: '/proficiency',
            name: 'proficiency',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/ProficiencyView.vue')
        },
        {
            path: '/find-me',
            name: 'find-me',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/FindMeView.vue')
        }
    ]
})

export default router