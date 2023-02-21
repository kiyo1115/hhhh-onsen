import Head from "next/head";
import TopLayout from "../../components/TopLayout";
import Sidebar from "../../components/Sidebar";
import TopIndex from "../../components/TopIndex";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyle from "../../styles/utils.module.css";

//動的ルーティング設定のための関数。pathsがルーティング設定になっている(開発環境なら毎回リクエスト時に実行される、本番環境ならビルド時だけ実行される。)。
//idがとりうる値のリストを返す
export async function getStaticPaths() {
  //ブログ投稿データのファイル名(id)を取得。
  const paths = getAllPostIds();

  return {
    paths, //どのパスが事前にレンダリングされるのか決める。
    fallback: false, //falseにすると、上のpathsに含まれてないあらゆるパスはアクセスすると404ページになる。)
    //trueにすると、生成しようとし、なければエラーを表示させる)
    //"blocking"とすると生成しようとせずはじくようになる
  };
}

//SSG(id(ファイル名)に基づいて必要なデータを取得)
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id); //あとでasyncとawaitをつける。

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <TopIndex>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <TopLayout>
          <Head>
            <title>{postData.title}</title>
          </Head>
          <article>
            <h1 className={utilStyle.headingX1}>{postData.title}</h1>
            <div className={utilStyle.lightText}>{postData.date}</div>
            <div
              dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }}
            />
          </article>
        </TopLayout>
      </div>
    </TopIndex>
  );
}
