<template>
  <div class="marketContainer">
    <header>
      <div class="head">
        <div>选择地区</div>
        <span class="back" @click="back" v-link="{path:backPath}">取消</span>
        <form>
          <i class="iconfont search">&#xe601;</i>
          <span>城市中文名和拼音</span>
        </form>
      </div>
    </header>
    <div id="cityScroll">
      <div>
        <ul>
          <li v-for="item in city">{{item}}</li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
import { tabChanger } from '../vuex/actions';
import { getTabindex,getIsLogin } from '../vuex/getters';
    export default {
      vuex:{
        actions:{
          change:tabChanger,
          isLogin:getIsLogin
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
        var myScroll;
        var that = this;
        this.chooseCity();
        setTimeout(function(){
          myScroll=new IScroll("#cityScroll",{
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars:true
          });
          that.noBorderLi();
        },500);
      },
      methods:{
        back(){
          this.backPath=this.tabArr[this.tabIndex].path;
        },
        chooseCity:function(){
          var that=this;
          this.$http.get("/mock/city.json").then(function(response){
            that.city=response.data.city;
          })
        },
        noBorderLi:function(){
          $('#cityScroll').find('li').each(function(){
            if($(this).html().charCodeAt(0)>=65&&$(this).html().charCodeAt(0)<=90){
              $(this).attr('class','title');
            }
          })
        }
      }

    }

</script>
