import { useContext, useState } from "react";
import TopIndex from "../components/TopIndex";
import { AuthContext } from "../state/AuthContext";
import { registerUser } from "../lib/auth";


const register = () => {
  // const appContext = useContext(AppContext);
  // const [data, setData] = useState({ username: "", email: "", password: "" });

  const handleRegister = () => {
  //   registerUser(data.username, data.email, data.password)
  //     .then(() => {
  //       //auth.jsでもthenで処理しているため、こちらでも成功or失敗の記述をする
  //       appContext.setUser(res.data.user); //_app.jsのステートのデータを参照
  //     })
  //     .catch((err) => console.log(err));
  };


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
          <form>
                <fieldset>
                <div>
                    <label>ユーザー名</label>
                    <input
                      type="text"
                      name="username"
                      style={{ height: 50, fontSize: "1.2rem" }}
                      required
                      minLength="2"
                      onChange={(e) => {
                        // handleChange(e);
                      }}
                    />
                  </div> 
                   <div>
                    <label>メールアドレス：</label>
                    <input
                      type="email"
                      name="identifier"
                      style={{ height: 50, fontSize: "1.2rem" }}
                      required
                      minLength="6"
                      onChange={(e) => {
                        // handleChange(e);
                      }}
                    />
                  </div> 
                  <div>
                    <label>パスワード：</label>
                    <input
                      type="password"
                      name="password"
                      style={{ height: 50, fontSize: "1.2rem" }}
                      required
                      minLength="6"
                      onChange={(e) => {
                        // handleChange(e);
                      }}
                    />
                  </div>
              
                  <button
                    style={{ float: "right", width: 120 }}
                    color="primary"
                    onClick={() => {
                      // handleLogin();
                    }}
                  >
                    登録
                  </button>
                 </fieldset>
               </form>
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
