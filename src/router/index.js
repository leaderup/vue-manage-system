import Vue from 'vue';
import Router from 'vue-router';

import Home from 'Components/common/Home';
import Readme from 'Views/Readme';
import BaseTable from 'Views/BaseTable';
import VueTable from 'Views/VueTable';
import BaseForm from 'Views/BaseForm';
import VueEditor from 'Views/VueEditor';
// import Markdown from 'Views/Markdown';
import Upload from 'Views/Upload';

import BaseCharts from 'Views/BaseCharts';
import DragList from 'Views/DragList';

import Login from 'Views/Login';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: Home,
            children:[
                {
                    path: '/',
                    component: Readme
                },
                {
                    path: '/basetable',
                    component: BaseTable
                },
                {
                    path: '/vuetable',
                    component: VueTable     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: BaseForm
                },
                {
                    path: '/vueeditor',
                    component: VueEditor    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../views/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: Upload       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: BaseCharts   // vue-schart组件
                },
                {
                    path: '/drag',
                    component: DragList    // 拖拽列表组件
                }
            ]
        },
        {
            path: '/login',
            component: Login
        },
    ]
})
