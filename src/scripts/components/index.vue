<template>
  <div class="indexContainer">
    <header>
      <i class="iconfont">&#xe609;</i>
      <form>
        <i class="iconfont search">&#xe601;</i>
        <span>菜谱、食材</span>
      </form>
      <i class="iconfont shopCart">&#xe608;</i>
    </header>
      <div id="myScroll">
        <div>
          <div class="nav">
            <div>
              <img src="http://s1.cdn.xiachufang.com/5a9862c2765711e6866f8db91f00672a.png">
              <span>买烘焙</span>
            </div>
            <div>
              <img src="http://s2.cdn.xiachufang.com/57dfbc38765711e6ae1f5b3f407192b9.png">
              <span>厨房问答</span>
            </div>
            <div>
              <img src="http://s2.cdn.xiachufang.com/5fa3a2ae765711e6a2888db91f00672a.png">
              <span>排行榜</span>
            </div>
            <div>
              <img src="http://s2.cdn.xiachufang.com/5d9532ca765711e6bd9b8db91f00672a.png">
              <span>菜谱分类</span>
            </div>
          </div>
          <div class="show">
            <div>
              <img src="http://s2.cdn.xiachufang.com/15df066c959311e6b2400242ac110002_1333w_1000h.jpg?imageView2/1/w/280/h/216/interlace/1/q/90">
              <span>本周流行菜谱</span>
            </div>
            <div>
              <img src="http://s2.cdn.xiachufang.com/3eb9b09697eb11e6b2400242ac110002_1067w_1067h.jpg?imageView2/1/w/280/h/280/interlace/1/q/90">
              <span>你的好友正在分享</span>
              <i class="iconfont">&#xe602;</i>
            </div>
          </div>
          <img class="newLogin" src="http://static.xiachufang.com/upload/f6a38c02-7935-11e5-b9af-c81f66ebffc0.png">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="http://s2.cdn.xiachufang.com/7f0bb6d287ef11e6a9a10242ac110002_600w_800h.jpg?imageView2/2/w/620/interlace/1/q/90" alt="">
                <div>
                  <p>----早餐----</p>
                  <p class="pro">4095作品</p>
                </div>
                <img src="http://s2.cdn.xiachufang.com/af069bc289e311e6b87c0242ac110003_2048w_2048h.jpg?imageView2/2/w/620/interlace/1/q/90" alt="">
              </div>
              <div class="swiper-slide">
                <img src="http://s1.cdn.xiachufang.com/8d18e264874911e6b87c0242ac110003_2560w_1920h.jpg@2o_50sh_1pr_1l_620w_90q_1wh" alt="">
                <div>
                  <p>----午餐----</p>
                  <p class="pro">3451作品</p>
                </div>
                <img src="http://s2.cdn.xiachufang.com/635fd4fc873311e6b87c0242ac110003_600w_400h.jpg?imageView2/2/w/620/interlace/1/q/90" alt="">
              </div>
              <div class="swiper-slide">
                <img src="http://s2.cdn.xiachufang.com/c911105a960011e6b2400242ac110002_900w_739h.jpg" alt="">
                <div>
                  <p>----晚餐----</p>
                  <p class="pro">5412作品</p>
                </div>
                <img src="http://s2.cdn.xiachufang.com/1dcd7176960411e6b2400242ac110002_640w_380h.png" alt="">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="ad">
            <p>{{month}}月{{day}}日 {{week}}</p>
            <img class="ad" src="http://s2.cdn.xiachufang.com/bf2cc374922a11e6b87c0242ac110003_640w_182h.jpg">
            <p class="study">跟着君之老师和烘焙大V学烘焙</p>
          </div>
          <div v-for="item1 in indexMsg1" class="indexMsg1">
            <img v-bind:src="item1.url">
            <p class="title">{{item1.title}}</p>
            <p class="menu">{{item1.menu}}</p>
          </div>
          <div v-for="item2 in indexMsg2" class="indexMsg2">
            <img v-bind:src="item2.url">
            <p class="title">{{item2.title}}</p>
            <p class="content">{{item2.content}}</p>
          </div>
          <div v-for="item3 in indexMsg3" class="indexMsg3">
            <div class="url" v-bind:style="{background:'url('+item3.url+') no-repeat center center/100% 150%'}"></div>
            <p class="title">{{item3.title}}</p>
            <p class="content">{{item3.content}}</p>
            <p class="scoreAcount">{{item3.scoreAcount}}</p>
            <div class="author">
              <img v-bind:src="item3.photo">
              <p class="name">{{item3.name}}</p>
            </div>
          </div>
          <div v-show="pullUp" class="pullUp">
            <div v-show="pullUp1">上拉加载更多</div>
            <div v-show="pullUp2">松开即可加载</div>
            <div v-show="pullUp3">正在加载...</div>
          </div>
        </div>
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
import { getTabindex,getIsLogin } from '../vuex/getters';
    export default {
      vuex:{
        actions:{
          change:tabChanger
        },
        getters:{
          tabIndex:getTabindex,
          isLogin:getIsLogin
        }
      },
      data(){
        return {
          indexMsg1:[],
          indexMsg2:[],
          indexMsg3:[],
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
          ],
          pullUp:true,
          pullUp1:true,
          pullUp2:false,
          pullUp3:false
        }
      },
      ready:function(){
        var myScroll;
        var that= this;
        this.loadIndexMsg1();
        this.loadIndexMsg2();
        this.loadIndexMsg3();
        setTimeout(function(){
          new Swiper(".swiper-container",{
            pagination : '.swiper-pagination'
          });
          myScroll=new IScroll("#myScroll",{
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars:true
          });
        },500);
        document.addEventListener('touchmove',function(){
          if(myScroll.y<myScroll.maxScrollY+50){
             that.pullUp1=false;
             that.pullUp2=true;
          }
          else{
            that.pullUp1=true;
            that.pullUp2=false;
          }
        });
        document.addEventListener('touchend',function(){
          if(myScroll.y<myScroll.maxScrollY+50){
            that.pullUp1=false;
            that.pullUp2=false;
            that.pullUp3=true;
             setTimeout(function(){
               that.loadIndexMsg3();
               setTimeout(function(){
                 myScroll.refresh();
                 that.pullUp1=true;
                 that.pullUp2=false;
                 that.pullUp3=false;
               },100)
             },1500);
          }
        });
      },
      methods:{
        changeTab(tabIndex){
          if(tabIndex==2){
            this.change(tabIndex);
          }
        },
        loadIndexMsg1:function(){
          var that=this;
          this.$http.get("/mock/index.json").then(function(response){
            that.indexMsg1=response.data.indexMsg1;
          })
        },
        loadIndexMsg2:function(){
          var that=this;
          this.$http.get("/mock/index2.json").then(function(response){
            that.indexMsg2=response.data.indexMsg2;
          })
        },
        loadIndexMsg3:function(){
          var that=this;
          this.$http.get("/mock/index3.json").then(function(response){
            that.indexMsg3=that.indexMsg3.concat(response.data.indexMsg3);
          })
        }
      },
        computed: {
            day: function() {
                return new Date().getDate();
            },
            month: function() {
                return new Date().getMonth() + 1;
            },
            week: function() {
              var week='';
                switch (new Date().getDay()) {
                    case 0:
                        week = "星期日";
                        break;
                    case 1:
                        week = "星期一";
                        break;
                    case 2:
                        week = "星期二";
                        break;
                    case 3:
                        week = "星期三";
                        break;
                    case 4:
                        week = "星期四";
                        break;
                    case 5:
                        week = "星期五";
                        break;
                    case 6:
                        week = "星期六";
                        break;
                }
                return week;
            }
        }

    }

</script>
