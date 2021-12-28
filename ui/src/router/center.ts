export const centerRoute = {
    path: '/center',
    name: 'centerCenter',
    component: () => import('/@/centerLayout/index.vue'),
    redirect: '/center/centerHome',
    meta: {
        title: '个人中心',
        isKeepAlive: true,
    },
    children: [
        {
            path: '/center/centerHome',
            name: 'centerCenterHome',
            component: () => import('/@/views/center/centerHome/index.vue'),
            meta: {
                title: '首页',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: true,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-shouye',
            },
        },
        {
            path: '/center/article',
            name: 'centerArticle',
            component: () => import('/@/views/center/article/index.vue'),
            meta: {
                title: '我的文章',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: true,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-shouye',
            },
        },
        {
            path: '/center/comment',
            name: 'centerComment',
            component: () => import('/@/views/center/comment/index.vue'),
            meta: {
                title: '我的评论',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: true,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-shouye',
            },
        },
        {
            path: '/center/collect',
            name: 'centerCollect',
            component: () => import('/@/views/center/collect/index.vue'),
            meta: {
                title: '我的收藏',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: true,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-shouye',
            },
        },
        {
            path: '/center/order',
            name: 'centerOrder',
            component: () => import('/@/views/center/order/index.vue'),
            meta: {
                title: '我的订单',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: true,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-shouye',
            },
        },
        {
            path: '/center/balance',
            name: 'centerBalance',
            component: () => import('/@/views/center/balance/index.vue'),
            meta: {
                title: '我的余额',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: true,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-shouye',
            },
        },
        {
            path: '/center/coupon',
            name: 'centerCoupon',
            component: () => import('/@/views/center/coupon/index.vue'),
            meta: {
                title: '优惠券',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: true,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-shouye',
            },
        },
        {
            path: '/center/vip',
            name: 'centerVipe',
            component: () => import('/@/views/center/vip/index.vue'),
            meta: {
                title: '会员信息',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: true,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-shouye',
            },
        },
        {
            path: '/center/adress',
            name: 'centerAdress',
            component: () => import('/@/views/center/adress/index.vue'),
            meta: {
                title: '我的地址',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: true,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-shouye',
            },
        },
        {
            path: '/center/info',
            name: 'centerInfo',
            component: () => import('/@/views/center/info/index.vue'),
            meta: {
                title: '基本信息',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: true,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-shouye',
            },
        },
        {
            path: '/center/signature',
            name: 'centerSignature',
            component: () => import('/@/views/center/signature/index.vue'),
            meta: {
                title: '个人签名',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: true,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-shouye',
            },
        },
        {
            path: '/center/profilePhoto',
            name: 'centerProfilePhoto',
            component: () => import('/@/views/center/profilePhoto/index.vue'),
            meta: {
                title: '头像设置',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: true,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-shouye',
            },
        },
        {
            path: '/center/accountPassword',
            name: 'centerAccountPassword',
            component: () => import('/@/views/center/accountPassword/index.vue'),
            meta: {
                title: '账号密码',
                isLink: '',
                isHide: false,
                isKeepAlive: true,
                isAffix: true,
                isIframe: false,
                auth: ['admin', 'test'],
                icon: 'iconfont icon-shouye',
            },
        }
    ],
};
