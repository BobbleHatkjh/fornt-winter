import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '*',
        redirect: '/home'
    },


    {
        name: 'home',
        component: () => import('./view/home'),
        meta: {
            title: '主页'
        }
    },

    {
        name: 'homeBook',
        component: () => import('./view/homeBook'),
        meta: {
            title: '预定'
        }
    },
    {
        name: 'my',
        component: () => import('./view/homeMy'),
        meta: {
            title: '我'
        }
    },
    {
        name: 'book',
        component: () => import('./view/book'),
        meta: {
            title: '预订信息'
        }
    },
    {
        name: 'hotel',
        component: () => import('./view/hotel'),
        meta: {
            title: '酒店搜索'
        }
    },
    {
        name: 'detail',
        component: () => import('./view/detail'),
        meta: {
            title: '酒店详细'
        }
    },
    {
        name: 'confirm',
        component: () => import('./view/confirm'),
        meta: {
            title: '确认预定'
        }
    },




    {
        name: 'proFile',
        component: () => import('./view/homeMy/personFile'),
        meta: {
            title: '个人资料'
        }
    },
    {
        name: 'vip',
        component: () => import('./view/homeMy/VIP'),
        meta: {
            title: '会员计划'
        }
    },
    {
        name: 'overview',
        component: () => import('./view/homeMy/overview'),
        meta: {
            title: '最近浏览'
        }
    },
    {
        name: 'normalInfo',
        component: () => import('./view/homeMy/normalInfo'),
        meta: {
            title: '常用信息'
        }
    },
    {
        name: 'service',
        component: () => import('./view/homeMy/service'),
        meta: {
            title: '智能客服'
        }
    },
    {
        name: 'setting',
        component: () => import('./view/homeMy/setting'),
        meta: {
            title: '设置'
        }
    },



    {
        name: 'login',
        component: () => import('./view/login'),
        meta: {
            title: '登陆和注册'
        }
    },


];

// add route path
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const router = new Router({routes});

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export {
    router
};
