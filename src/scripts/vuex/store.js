const state = {
  tabIndex: 0,
  isLogin:false
}

const mutations = {
  CHANGETAB (state, currentTabindex) {
    state.tabIndex = currentTabindex;
  },
  CHANGEISLOGIN (state, isLogin) {
    state.isLogin = isLogin;
  }
}

export default new Vuex.Store({
  state,
  mutations
});
