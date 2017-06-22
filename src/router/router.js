import App from '../App';

import home from 'pages/home';
// import list from 'pages/list';


export default [
    { // 审批路由
        path: '/',
        component: App,
        children: [　// 二级路由对应App.vue
            {
                path: 'home',
                name: 'home',
                component: home,
                children: [

                ]
            },
            { // 重定向
                path: '',
                redirect: '/home'
            }
            // ,
            // {
            //     path: 'list',
            //     name: 'list',
            //     component: list
            // }
        ]
    }
];
