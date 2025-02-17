export default [
  { path: '/', redirect: '/home' },
  {
    name: '首页',
    path: '/',
    component: '@/layouts/base',
    meta: {
      desc: '首页的描述',
    },
    routes: [
      {
        name: '首页',
        path: '/home',
        component: './Home',
        meta: {
          desc: '初始化demo，用来展示workSpace的基本用法，后续添加面包屑功能',
        },
      },
      {
        name: '权限演示',
        path: '/access',
        component: './Access',
        meta: {
          desc: '演示权限',
        },
      },
      {
        name: 'CRUD 示例',
        path: '/table',
        component: './Table',
        meta: {
          desc: '基础的CRUD模型DEMO',
        },
      },
      {
        name: '测试',
        path: '/test',
        routes: [
          {
            name: '测试主页',
            path: '/test/index',
            component: './Test',
            meta: {
              desc: '测试主页的描述',
            },
          },
          {
            name: '测试1',
            path: '/test/test1',
            component: './Test/Test1',
            meta: {
              desc: '测试1的描述',
            },
          },
        ],
      },
      {
        name: '微前端',
        path: '/subApp',
        routes: [
          {
            name: '模版',
            path: '/subApp/template/*',
            // component: './MicroApp/dash'
            microApp: 'template',
            meta: {
              desc: '可视化页面配置',
            },
          },
        ],
      },
    ],
  },
  {
    name: '首页',
    path: '/login',
    component: '@/layouts/login',
    meta: {
      desc: '登录页面',
    },
  },
];
