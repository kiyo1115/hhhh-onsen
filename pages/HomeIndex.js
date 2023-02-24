import utilsStyles from "../styles/utils.module.css";
import { useState } from "react";
import OnsenList from "../components/OnsenList";
import Link from "next/link";
import styles from "../styles/Home.module.css";


export default function HomeIndex({ allPostsData }) {
  const [titleQuery, setTitleSetQuery] = useState("");
  const [subQuery, setSubQuery] = useState("");

  const items = ["タイトル内容で探す", "記事内容で探す"];

  const [selected, setSelected] = useState(items[0]);
  /** ラジオボタン切り替えイベント */
  const changeValue = (e) => setSelected(e.target.value);

  return (
    <div>
      <section className={utilsStyles.headingMd}>
        <div className="container-fluid">
          <div>
            <div>
              <div className="search">
                <div>
                  <div className="flex">
                    {items.map((item) => {
                      return (
                        <div className="spanFlex" key={item}>
                          <input
                            id={item}
                            className="form-check-input"
                            type="radio"
                            value={item}
                            checked={item === selected}
                            onChange={changeValue}
                          />
                          <label>{item}</label>
                        </div>
                      );
                    })}
                  </div>
                  {selected === "タイトル内容で探す" ? (
                    <input
                      placeholder="検索ワードを入力してください"
                      className="inputClass"
                      onChange={(e) => {
                        //toLocaleLowerCaseをつけることで大文字入力でも小文字で対応する
                        //これをpropsでRestaurantListで渡し、検索機能をつける
                        setTitleSetQuery(e.target.value);
                      }}
                    />
                  ) : (
                    <input
                      placeholder="記事内容を入力してください"
                      className="inputClass"
                      onChange={(e) => {
                        //toLocaleLowerCaseをつけることで大文字入力でも小文字で対応する
                        //これをpropsでRestaurantListで渡し、検索機能をつける
                        setSubQuery(e.target.value);
                      }}
                    />
                  )}
                </div>
              </div>
              <OnsenList
                allPostsData={allPostsData}
                titleSearch={titleQuery}
                subSearch={subQuery}
              />
              
            </div>
          </div>
          <style jsx>
            {`
              .search {
                margin: 10px 10px 10px 8px;
                width: auto;
              }
              .inputClass {
                width: 1000px;
              }
              .search {
              }
              .flex {
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .spanFlex {
                display: flex;
                align-items: center;
                margin-left: 30px;
              }
              .form-check-input {
                margin: -15px;
                margin-top: -20px;
              }
            `}
          </style>
        </div>
      </section>
    </div>
  );
}
