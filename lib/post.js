import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts"); //process.cwd()はnextjs-maicroblog配下を指定している

//mdファイルのデータを取り出す
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory); //ファイル一覧をfileNamesへ格納
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); //拡張子.mdを除去

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    //上記で除去はしているが、fileNameには.mdのファイル名が入っている為、そのファイルを
    //下記のreadFileSyncでutf8の文字コードで取得
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents); //matter構文を使うとオブジェクトとして取得する
    return {
      //getPostDataを実行するとファイル名を除去したidとutf8の文字列のデータが取得できる
      id,
      ...matterResult.data,
    };
  }); //returnでallPostsDataへデータを返し
  return allPostsData;
}

//「getStaticPath」でreturnで使うpathを取得する
//静的なパスの場所を指定するために使用するのがgetStaticPath関数
//名称はgetStaticPathでなくても良い
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory); //ファイル一覧をfileNamesへ格納
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
// 以下のような配列を返します:
// [
//   {
//     params: {
//       id: 'ssg-ssr'
//     }
//   },
//   {
//     params: {
//       id: 'pre-rendering'
//     }
//   }
// ]

//idに基づいてブログ投稿データを返す
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContent); //matter構文を使うとオブジェクトとして取得する

  //取得内容が文字列となってしまい、マークダウンファイルとして読み取らないため
  //remarkの関数を使い変換する
  const blogContent = await remark()
  .use(html)
  .process(matterResult.content);

  //最後に文字列変換する
  const blogContentHTML = blogContent.toString();

  return{
    id,
    blogContentHTML,
    ...matterResult.data
  }
}
