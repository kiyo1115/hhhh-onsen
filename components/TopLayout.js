import Head from "next/head";
import styles from "./Layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "温泉スポット検索";
export const siteTitle = "温泉ブログ";

function TopLayout({ children, home }) {

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="./favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/profile.png" className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`}/>
            <h1 className={utilsStyles.heading2X1}>{name}</h1>
          </>
        ) : (
          <>
            <img src="/images/profile.png" className={`${utilsStyles.borderCircle}`}/>
            <h1 className={utilsStyles.heading2X1}>{name}</h1>
          </>
        )}
      </header>



      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">←　ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default TopLayout;
