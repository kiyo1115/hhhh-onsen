import Head from "next/head";
import TopLayout, { siteTitle } from "../components/TopLayout";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import TopIndex from "../components/TopIndex";
import { getPostsData } from "../lib/post";
import HomeIndex from "./HomeIndex";

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

//SSRの場合
// export async function getServerSideProps(context) {
//   return{
//     props:{
//       //コンポーネントにわたすためのprops
//     }
//   }
// }

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
        </TopLayout>
        <Rightbar/>
      </div>
    </TopIndex>
  );
}
