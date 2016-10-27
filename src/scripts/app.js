import '../styles/usage/page/app.scss';

import index from "./components/index.vue";
import market from "./components/market.vue";
import mail from "./components/mail.vue";
import mine from "./components/mine.vue";


// 在根组件加入 store，让它的子组件和 store 连接
import store from './vuex/store';
let App = Vue.extend({
  store: store
});

let router = new VueRouter();
router.map({
    '/': {
        component: index
    },
    '/cook':{
      component: index
    },
    '/market':{
      component: market
    },
    '/mail':{
      component: mail
    },
    '/mine':{
      component: mine
    }
});
router.start(App, 'body');
