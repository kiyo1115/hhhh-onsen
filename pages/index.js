import Head from "next/head";
import TopLayout, { siteTitle } from "../components/TopLayout";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import TopIndex from "../components/TopIndex";
import { getPostsData } from "../lib/post";
import HomeIndex from "./HomeIndex";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import utilsStyles from "../styles/utils.module.css";



//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    },
    //この書き方はmdファイルから取得するための特有の書き方の為、覚えるしかない
    //function名も決まっている
    //本来ならgetStaticPropsに格納されそうだがそうではないらしい
  };
}

export default function Home({ allPostsData }) {
  return (
    <TopIndex>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <TopLayout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <HomeIndex allPostsData={allPostsData} />
          <h2 className={utilsStyles.headingMd}>記事一覧</h2> 
          <div className={styles.grid}>
            {allPostsData.map(({ id, date, title, thumbnail }) => {
              return (
                <article key={id}>
                  <Link href={`/posts/${id}`}>
                    <img
                      src={thumbnail}
                      className={styles.thumbnailImage}
                      alt=""
                    />
                  </Link>
                  <Link href={`/posts/${id}`} className={styles.boldText}>
                    {title}
                  </Link>
                  <br />
                  <small className={styles.lightText}>{date}</small>
                </article>
              );
            })}
          </div>
        </TopLayout>
        <Rightbar />
      </div>
    </TopIndex>
  );
}
