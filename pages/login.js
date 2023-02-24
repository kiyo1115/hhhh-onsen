import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { login } from "../lib/auth";
import Link from "next/link";
import TopIndex from "../components/TopIndex";

const Login = () => {
  // const appContext = useContext(AppContext);
  // const [data, setData] = useState({ identifier: "", password: "" });
  // const handleLogin = () => {
  //   login(data.identifier, data.password).then((res) => {
  //     appContext.setUser( res.data.user );
  //   }).catch((err) => console.log(err));
  // };
  // const handleChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

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
              <form>
                <fieldset>
                  <div>
                    <label>メールアドレス：</label>
                    <input
                      type="email"
                      name="identifier"
                      style={{ height: 50, fontSize: "1.2rem" }}
                      onChange={(e) => {
                        handleChange(e);
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
                        handleChange(e);
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
                    onClick={() => {
                      handleLogin();
                    }}
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
