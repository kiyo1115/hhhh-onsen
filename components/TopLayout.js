import Head from "next/head";
import styles from "./Layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "πζΈ©ζ³γΉγγγζ€η΄’";
export const siteTitle = "ζΈ©ζ³γγ­γ°";

function TopLayout({ children, home }) {

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="./favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            {/* <img src="/images/profile.png" className={`${utilsStyles.borderCircle} alt="" ${styles.headerHomeImage}`}/> */}
            <h1 className={utilsStyles.heading2X1}>{name}</h1>
          </>
        ) : (
          <>
            {/* <img src="/images/profile.png" className={`${utilsStyles.borderCircle}`} alt=""/> */}
            <h1 className={utilsStyles.heading2X1}>{name}</h1>
          </>
        )}
      </header>

      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">βγγγΌγ γΈζ»γ</Link>
        </div>
      )}
    </div>
  );
}

export default TopLayout;
