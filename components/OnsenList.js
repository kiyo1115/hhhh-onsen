import styles from "../styles/Home.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";

const OnsenList = ({ allPostsData, titleSearch, subSearch }) => {
  let titleQuery = [];
  let subQuery = [];

  if (titleSearch != "") {
    titleQuery = allPostsData.filter((spot) =>
      spot.title.includes(titleSearch)
    );
  }

  if (subSearch != "") {
    subQuery = allPostsData.filter((spot) => spot.sub.includes(subSearch));
  }

  return (
    <section className={utilsStyles.headingMd}>
      {titleQuery == "" && subQuery == "" ?  <div></div> :<h2>๐ๆค็ดข็ตๆ</h2>}
      <div className={styles.grid}>
        {subSearch == ""
          ? titleQuery.map(({ id, date, title, thumbnail }) => {
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
                  <hr />
                </article>
                
              );
            })
          : subQuery.map(({ id, date, title, thumbnail }) => (
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
                <hr />

              </article>
            ))}
      </div>
    </section>
  );
};

export default OnsenList;
