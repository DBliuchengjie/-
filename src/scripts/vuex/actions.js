export const tabChanger = function({dispatch, state}, tabIndex) {
  dispatch('CHANGETAB', tabIndex);
};
export const isLoginChanger = function({dispatch, state}, isLogin) {
  dispatch('CHANGEISLOGIN', isLogin);
};
