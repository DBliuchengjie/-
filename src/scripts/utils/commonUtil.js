let commonUtil = {
  isLoadImg(scope){
    var isLoad = true;
    var that=this;
      $(scope).find('p').each(function(){
        // console.log($(this).attr('src')||$(this).attr('v-bind:src'));
        console.log(1);
      });
      if(isLoad){
        return true;
      }
      else{
        setTimeout(function(){
          return that.isLoadImg(scope);
        },500);
      }
  }

}
module.exports = commonUtil;
