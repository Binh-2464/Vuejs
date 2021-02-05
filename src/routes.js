import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Page from './components/Page.vue';
import Events from './components/Events.vue';
import test from './components/test.vue';
import Profile from './components/Profile.vue';
import Register from './components/Register.vue';
import Profile_1 from './components/Profile_1.vue';
import Detail from './components/Detail.vue';

const routes = [
    {
        path: "/Home",
        component: Home
    },
    {
        path: "/Page",
        component: Page
    },
    {
        path:'/Events',
        component: Events
    },
    {
        path: '/test',
        component: test
    },
    {
        path: '/Profile',
        component: Profile
    },
    {
        path: '/Register',
        component: Register
    },
    {
        path: '/Profile_1',
        component: Profile_1
    },
    {
        path: '/Detail',
        component: Detail
    },
];

const router = new VueRouter(
    {
        routes : routes
    }

);

Vue.use(VueRouter);

export default router;