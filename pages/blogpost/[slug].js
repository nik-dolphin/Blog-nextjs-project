import Head from "next/head";
import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import * as fs from "fs";
import { FaArrowCircleUp } from "react-icons/fa";


function Blog(props) {
  function createMarkup(content) {
  return {__html: content};
}
  const [blogItems, setblogItems] = useState(props.myBlog);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }
  // const router = useRouter();
  
  // useEffect(() => {
  //   const { slug } = router.query;
  //   if (!router.isReady) return;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((items) => {
  //       setblogItems(items);
  //     });
  // }, [router.isReady]);

  return (
    <>
      <Head>
        <title>Next Blog | {blogItems && blogItems.slug}</title>
      </Head>
      {blogItems && (
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.blogItem}>
              <h1 style={{textAlign:"center"}}>{blogItems.title}</h1>
              {blogItems && <div className={styles.blogBody} dangerouslySetInnerHTML={createMarkup(blogItems.description)}></div>}
            </div>
            <button
            className={styles.buttonToTop}
            style={{ display: visible ? "inline" : "none" }}
            onClick={scrollToTop}
          >
            <FaArrowCircleUp />
          </button>
          </main>
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  let allBlogs = await fs.promises.readdir(`blogData`);
  allBlogs = allBlogs.map((item) => {
    return { params: { slug: item.split(".")[0]}}
  })
  return {
    paths: allBlogs,
    fallback: false // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const {slug} = context.params;
  const myBlog = await fs.promises.readFile(`blogData/${slug}.json`,'utf-8');

  return {
    props: {myBlog : JSON.parse(myBlog)},
  }
}

export default Blog;
