import styles from "../styles/Home.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";

const OnsenList = ({ allPostsData }) => {
  const all = allPostsData
  return (
    <section className={utilsStyles.headingMd}>
      <h2>✍記事一覧</h2>
      <div className={styles.grid}>
        {all.map(({ id, date, title, thumbnail }) => (
          <>
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={thumbnail} className={styles.thumbnailImage} alt="" />
              </Link>
              <Link href={`/posts/${id}`} className={styles.boldText}>
                {title}
              </Link>
              <br />
              <small className={styles.lightText}>{date}</small>
            </article>
          </>
        ))}
      </div>
    </section>
  );
};

export default OnsenList;
