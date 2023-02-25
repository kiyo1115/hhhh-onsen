const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true, //データを取ってこれたかどうか
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false, //データを取ってこれたかどうか
        error: false,
      };
    case "LOGIN_ERROR":
      return {
        user: null,
        isFetching: false, //データを取ってこれたかどうか
        error: action.payload,
      };
    case "SEARCH_SUCCESS":
      return {
        user: null,
        search: action.payload,
        isFetching: false, //データを取ってこれたかどうか
        error: false,
      };
    case "SEARCH_ERROR":
      return {
        user: null,
        search: null,
        isFetching: false, //データを取ってこれたかどうか
        error: action.payload,
      };
    default:
      return state;
  }
};

//第一引数は受け取るだけで実際実行時には何も入っていない
//第二引数の値はauthActionで実行され、その返り値を第一引数で取得する？

export default AuthReducer;
