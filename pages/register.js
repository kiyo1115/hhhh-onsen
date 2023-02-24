import { useContext, useState } from "react";
import TopIndex from "../components/TopIndex";
import AppContext from "../context/AppContext";
import { registerUser } from "../lib/auth";


const register = () => {
  // const appContext = useContext(AppContext);
  // const [data, setData] = useState({ username: "", email: "", password: "" });

  // const handleRegister = () => {
  //   registerUser(data.username, data.email, data.password)
  //     .then(() => {
  //       //auth.jsでもthenで処理しているため、こちらでも成功or失敗の記述をする
  //       appContext.setUser(res.data.user); //_app.jsのステートのデータを参照
  //     })
  //     .catch((err) => console.log(err));
  // };


  return (
    <TopIndex>
    <div>
      <div>
        <div>
          <div className="paper">
            <div className="header">
              <h2>ユーザー登録</h2>
            </div>
          </div>
          <section className="wrapper">
            <from>
              <fieldset>
                <div>
                  <label>ユーザー名：</label>
                  <input
                    type="text"
                    name="username"
                    style={{ height: 50, fontSize: "1.2rem" }}
                    onChange={(e) => {
                      setData({ ...data, username: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <label>メールアドレス：</label>
                  <input
                    type="email"
                    name="email"
                    style={{ height: 50, fontSize: "1.2rem" }}
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                  />
                </div>
                <div>
                  <label>パスワード：</label>
                  <input
                    type="password"
                    name="password"
                    style={{ height: 50, fontSize: "1.2rem" }}
                    onChange={(e) => {
                      setData({ ...data, password: e.target.value });
                    }}
                  />
                </div>
                <span>

                </span>
                <button
                  style={{ float: "right", width: 120 }}
                  color="primary"
                  onClick={() => {
                    handleRegister();
                  }}
                >
                  登録
                </button>
              </fieldset>
            </from>
          </section>
        </div>
      </div>
      <style jsx>
        {`
          .paper {
            text-align: center;
            margin-top: 50px;
          }
          .header {
            width: 100%;
            margin-bottom: 30px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px;
          }
        `}
      </style>
    </div>
    </TopIndex>
  );
};

export default register;
