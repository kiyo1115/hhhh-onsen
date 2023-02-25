//yユーザー入力に応じたアクションの設定
export const LoginStart = (user) => {
  return (
    {
    type: "LOGIN_START",
    }
  )
};
export const LoginSuccess = (user) => {
  return(
    {
    type: "LOGIN_SUCCESS",
    payload: user,
    }
  )
};
export const LoginError = (error) => ({
  type: "LOGIN_ERROR",
  payload: error,
});
