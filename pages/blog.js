/* eslint-disable @next/next/link-passhref */
import Head from "next/head";
import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

function Blog(props) {
  const [blogItems, setblogItems] = useState(props.allBlogs);
  const [count, setCount] = useState(2);
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

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs").then((data) => {
  //     return data.json();
  //   }).then((items) => {
  //     setblogItems(items);
  //   })
  // }, [])
  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
    setCount(count + 2);
    let data = await d.json();
    setblogItems(data);
  };

  return (
    <>
      <Head>
        <title>Next Blog | Blog</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <InfiniteScroll
            className={styles.outerInfiniteScroll}
            dataLength={blogItems.length} //This is important field to render the next data
            next={fetchData}
            hasMore={props.allCount !== blogItems.length}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {blogItems &&
              blogItems.map((items) => {
                return (
                  <div key={items.slug} className={styles.blogItem}>
                    <Link href={`/blogpost/${items.slug}`}>
                      <h3 className={styles.blogItemH3}>{items.title}</h3>
                    </Link>
                    <p>{items.metadesc.substr(0, 150)}...</p>
                    <Link href={`/blogpost/${items.slug}`}>
                      <button type="submit" className={styles.formbutton}>
                        Read More
                      </button>
                    </Link>
                  </div>
                );
              })}
          </InfiniteScroll>
          <button
            className={styles.buttonToTop}
            style={{ display: visible ? "inline" : "none" }}
            onClick={scrollToTop}
          >
            <FaArrowCircleUp />
          </button>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const data = await fs.promises.readdir("blogData");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 5; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogData/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs, allCount },
  };
}

export default Blog;
