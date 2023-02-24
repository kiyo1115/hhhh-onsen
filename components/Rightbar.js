import React from "react";
import styles from "./Rightbar.module.css";
import GoogleMap from "./Googlemap"

export default function Rightbar() {
  return (
    <div className={styles.rightbar}>
      <div className={styles.rightbarWrapper}></div>
      <div className={styles.eventContainer}>
        <img src="/images/star.png" alt="" className={styles.starImg} />
        <span className={styles.eventText}>
          <b>フォロワー限定</b>イベント開催中！
        </span>
      </div>
    <GoogleMap/>
      <p className={styles.promotionTitle}>プロモーション広告</p>
      <img
        src="/images/promotion/promotion1.jpeg"
        alt=""
        className={styles.rightbarPromotionImg}
      />
      <p className="promotionName">ショッピング</p>
      <img
        src="/images/promotion/promotion2.jpeg"
        alt=""
        className={styles.rightbarPromotionImg}
      />
      <p className="promotionName">カーショップ</p>
      <img
        src="/images/promotion/promotion3.jpeg"
        alt=""
        className={styles.rightbarPromotionImg}
      />
      <p className="promotionName">lewisfeet株式会社</p>
    </div>
  );
}
