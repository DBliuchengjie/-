<template>
  <div class="loginOrRegisterContainer">
    <header>
      <span @click="back" v-link="{path:backPath}">取消</span>
    </header>
    <div class="content">
      <div class="logo">
        <img src="/images/logo.png">
        <p>唯有美食与爱不可辜负</p>
      </div>
    </div>
    <footer>
      <div class="login">登录</div>
      <div class="register">手机注册</div>
    </footer>
  </div>
</template>
<script>
import { tabChanger } from '../vuex/actions';
import { getTabindex } from '../vuex/getters';
export default {
  vuex:{
    actions:{
      change:tabChanger
    },
    getters:{
      tabIndex:getTabindex
    }
  },
  data(){
    return {
      city:[],
      backPath:'',
      tabArr:[
        {
          path:'/cook',
          iHtml:'&#xe60a;',
          pHtml:'厨房'
        },
        {
          path:'/market',
          iHtml:'&#xe606;',
          pHtml:'市集'
        },
        {
          path:'/mail',
          iHtml:'&#xe605;',
          pHtml:'信箱'
        },
        {
          path:'/mine',
          iHtml:'&#xe604;',
          pHtml:'我的'
        }
      ]
    }
  },
  ready:function(){
    
  },
  methods:{
    back(){
      this.backPath=this.tabArr[this.tabIndex].path;
    }
  }
}
</script>
