<template>
  <div class="mailContainer">
    <header>
      <div>
        <p>信箱</p>
        <i class="iconfont">&#xe60b;</i>
      </div>
    </header>
    <div class="content">
      <p>有一个小信箱，信会寄到这里</p>
      <div  v-link="{path:'/mine'}">登录</div>
    </div>
    <footer>
      <div v-for="tab in tabArr" @click="changeTab($index)" v-link="{path:tab.path}" v-bind:class="tabIndex == $index ? 'active' : ''">
        <i class="iconfont">{{{tab.iHtml}}}</i>
        <p>{{tab.pHtml}}</p>
      </div>
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
        changeTab(tabIndex){
          if(tabIndex==0){
            this.change(tabIndex);
          }
        }
      }
    }
</script>
