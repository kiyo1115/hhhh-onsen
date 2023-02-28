import Head from "next/head";
import styles from "./Layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../state/AuthContext";

function TopIndex({ children }) {
  const { user, search, isFetchingUser, errorUser, dispatch } =
    useContext(AuthContext);
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" //varは5.1.0から4.0.0に変更した
        />
      </Head>
      <header>
        <div className="navbar navbar-dark bg-dark">
          <div>
            <Link href="/">
              {/* <a className="navbar-brand">ホーム</a>
               */}
              <span className="">ホーム</span>
            </Link>
          </div>
          <div className="ml-auto">
            {user ? (
              <Link href="/">
                <div
                  className="nav-link"
                  onClick={() => {
                    // user(null);
                    //グローバルで指定している変数setUserを使って
                    //user定数をnullに変更している
                  }}
                >
                  ログアウト
                </div>
              </Link>
            ) : (
              <Link href="/login">
                {/* <a className="nav-link">ログイン</a> */}
                <span className="">ログイン</span>
              </Link>
            )}
          </div>
          <div>
            {user ? (
              <h5 style={{ marginTop: "5px" }}>{user.username}</h5>
            ) : (
              <Link href="/register">
                {/* <a className="nav-link">新規登録</a> */}
                <span className="">新規登録</span>
              </Link>
            )}
          </div>
        </div>
        <style jsx>
          {`
            span {
              color: white;
            }
            h5 {
              color: white;
            }
            .bg-dark {
              display: "flex";
              alignitems: "center";
            }
          `}
        </style>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default TopIndex;
