import { useContext, useState } from "react";
import { AuthContext } from "../state/AuthContext";
import { login } from "../lib/auth";
import Link from "next/link";
import TopIndex from "../components/TopIndex";
import { loginCall } from "../apiCalls";

const Login = () => {
  const [mail, setMail] = useState(null);
  const [pass, setPass] = useState(null);

  const { user, search, isFetchingUser, errorUser, dispatch } =
    useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault(); //リロードをしないようにするイベントハンドラー

    // console.log(email.current.value)
    // console.log(password.current.value)
    loginCall(
      //第一引数にはオブジェクトとして値を渡す
      {
        email: mail,
        password: pass,
      },
      //第二引数にはdispatch自体の関数を渡す
      dispatch
    );
  };

  return (
    <TopIndex>
      <div>
        <div>
          <div>
            <div className="paper">
              <div className="header">
                <h2>ログイン</h2>
              </div>
            </div>
            <section className="wrapper">
              <form
                onSubmit={(e) => {
                  handleLogin(e);
                }}
              >
                <fieldset>
                  <div>
                    <label>メールアドレス：</label>
                    <input
                      type="email"
                      name="identifier"
                      style={{ height: 50, fontSize: "1.2rem" }}
                      required
                      minLength="6"
                      onChange={(e) => {
                        setMail(e.target.value);
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
                        setPass(e.target.value);
                      }}
                    />
                  </div>
                  <span>
                    <Link href="/">
                      <small>パスワードをお忘れですか？</small>
                    </Link>
                  </span>
                  <button
                    style={{ float: "right", width: 120 }}
                    color="primary"
                  >
                    ログイン
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

export default Login;
