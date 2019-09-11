import Vue from 'vue';
import Router from 'vue-router';
import Test from './views/Test';
import Home from './views/Home';
import Components from './views/Components';
import Login from './views/Login';
import Register from './views/Register';
import ThankYou from './views/ThankYou';
import Submission from './views/Submission'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/test',
            name: 'Test',
            component: Test
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/components',
            name: 'Komponenten',
            component: Components
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/thank',
            name: 'Thank You',
            component: ThankYou
        },
        {
            path: '/submission',
            name: 'Submission',
            component: Submission
        }
    ]
});