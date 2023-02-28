import { useContext, useRef, useState } from "react";
import TopIndex from "../components/TopIndex";
import { AuthContext } from "../state/AuthContext";
import { registerUser } from "../lib/auth";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [passconfirm, setPassConfirm] = useState(null);

  // const navigate = useNavigate(); //ナビゲートするためのもの

  const handleSubmit = async (e) => {
    e.preventDefault(); //リロードをしないようにするイベントハンドラー

    //パスワードと確認用のパスワードが合っているかどうかを確認
    if (pass !== passconfirm) {
      alert("パスワードが違います。");
      return;
    } else {
      try {
        //registerApiを叩く
        const user = {
          username: username,
          email: email,
          password: pass,
        };
        await axios.post("/auth/register", user);
        window.location.href = "/";
      } catch (err) {
        console.log(err);
      }
    }
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
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <fieldset>
                  <div>
                    <label>ユーザー名</label>
                    <input
                      type="text"
                      name="username"
                      style={{ height: 50, fontSize: "1.2rem" }}
                      required
                      minLength="3"
                      onChange={(e) => {
                        setUsername(e.target.value);
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
                        setEmail(e.target.value);
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
                  <div>
                    <label>パスワード確認：</label>
                    <input
                      type="password"
                      name="password"
                      style={{ height: 50, fontSize: "1.2rem" }}
                      required
                      minLength="6"
                      onChange={(e) => {
                        setPassConfirm(e.target.value);
                      }}
                    />
                  </div>

                  <button
                    style={{ float: "right", width: 120 }}
                    color="primary"
                    type="submit"
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

export default Register;
