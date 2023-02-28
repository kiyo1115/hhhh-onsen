import axios from "axios";

export const loginCall = async (user, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {    

    
    //データベースと通信できたら第一引数のaxios経由でURL/loginを開き
    //第二引数（user）にはバックエンドの(req.body)に代入され、{emailとpassword}が入る
    const res = await axios.post("/auth/login", user);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    //axiosを使用した場合、ログインしたらdataオブジェクトに格納されるため
    // res.dataを更新する
  } catch (err) {
    dispatch({ type: "LOGIN_ERROR", payload: err });
  }
};

export const searchCall = async (search, dispatch) => {
  try {
    dispatch({ type: "SEARCH_SUCCESS", payload: search });
    //axiosを使用した場合、ログインしたらdataオブジェクトに格納されるため
    // res.dataを更新する
  } catch (err) {
    dispatch({ type: "SEARCH_ERROR", payload: err });
  }
};

