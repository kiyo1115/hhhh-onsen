import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザー状態を定義
const initialState = {
  user: null,
  // JSON.parse(localStorage.getItem("user"))  ||
  // user: {
  //   _id: "63fd4a29b4fe240204ddec63",
  //   username: "kiyosato",
  //   email: "kiyo@gmail.com",
  //   password: "kiyosato",
  //   profilePicture: "",
  //   isAdmin: false,
  // },
  search: null,
  isFetching: false, //データを取ってこれたかどうか
  error: false,
};

//状態をグローバルに管理する

export const AuthContext = createContext(initialState); //グローバルのコンテキストを作成することができる

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  //dispatchはどこで呼ばれているかというと
  // D:\react関連\dev\reactProject\real-sns\frontend\src\apiCalls.js
  // apicallsのlogincallで呼ばれている

  // useEffect(() => {
  //   localStorage.setItem("user",JSON.stringify(state.user))
  // },[state.user])

  return (
    //stateで初期値を変更後に内容を書き換える
    <AuthContext.Provider
      value={{
        user: state.user,
        search:state.search,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
      {/* ここのチルドレンは何かというとこのコンポーネントはindex.js
        のAppコンポーネントの上に置く */}
      {/* つまりAuthContextProviderからみてその下にある属性にたいして
        適応するということ。
        children＝index.jsの<App />に適応するということ */}
    </AuthContext.Provider>
  );
};

//useReducerとは----------------------------------
//useReducerはuseStateのグローバルという認識で大丈夫
//基本的にuseContextと一緒に使う
//useReducerとは----------------------------------

//useReducerの設定方法----------------------------
//useStateと同様にconstの第一引数の値を第二引数の関数を実行することで値が変動する
//今回であれば第一引数はstate、第二引数はdispatchのこと
//useRecucerは第一引数に実行する関数を設定、第二引数にはconstの初期値を設定する
//useReducerの設定方法----------------------------

//stateの更新方法---------------------------------
//useReducerの第二引数でactionが実行され、結果がその第一引数に指定した値が返り値となり
//その値がstateへ格納される
//stateの更新方法---------------------------------

//useReducerの一連の流れ---------------------------
//第一引数にはreducerの関数を指定と第二引数には初期値をまずは決める
//第一引数はconst[dispatch]が実行されたときに実行され
//第一引数の実行された値を受け取る
//useReducerの結果をstateが受け取り値を更新する
//useRducerの一連の流れ---------------------------
