/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Blog App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.imageWrapper}>
          <img
            src="/homeImage.jpg"
            alt="image"
            width={170}
            height={158}
            className={styles.myImage}
          />
        </div>
        <h1 className={styles.title}>Next Blog</h1>
        <div className={styles.container}>
          <h2 className={styles.center}>Latest Blog</h2>
        </div>
        <div className={styles.blogItem}>
          <h3 className={styles.blogItemH3}>blog 1</h3>
          <p className={styles.blogPara}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, saepe
            quis. Eveniet eum iusto cupiditate optio illo. Magni voluptatibus
            reprehenderit maiores corporis minus, aut voluptatem tempore,
            molestias, iure a illum!
          </p>
          <button type="submit" className={styles.formbutton}>
            Read More
          </button>
        </div>
        <div className={styles.blogItem}>
          <h3 className={styles.blogItemH3}>blog 2</h3>
          <p className={styles.blogPara}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            hic quasi harum architecto placeat autem dolor qui dignissimos
            explicabo eaque, consequatur voluptatem id eligendi molestias optio
            quibusdam maiores quaerat? Reiciendis.
          </p>
          <button type="submit" className={styles.formbutton}>
            Read More
          </button>
        </div>
        <div className={styles.blogItem}>
          <h3 className={styles.blogItemH3}>blog 3</h3>
          <p className={styles.blogPara}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            dolor soluta ipsum nisi ullam praesentium aperiam, aut eaque culpa
            earum optio reiciendis facere, eius corporis architecto totam sed!
            Quas, impedit.
          </p>
          <button type="submit" className={styles.formbutton}>
            Read More
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className={styles.description}>
          all blog in Next Blog by Nikunj Bhuva
        </p>
      </footer>
    </div>
  );
}
