import Head from "next/head";
import React from "react";
import styles from "../styles/About.module.css";

function about() {
  return (
    <>
      <Head>
        <title>Next Blog | about</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.aboutBody}>
          <h1 className={styles.center}>About NextBlog</h1>
            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              et animi ut consequuntur eveniet, eligendi assumenda, inventore
              iste officia, molestiae at suscipit ab. Velit quod ipsum suscipit!
              Voluptatem, sint nemo.
            </p>
            <h2>Services Offered</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              deleniti atque incidunt. Mollitia iure dicta ad distinctio
              similique, temporibus odio aut rerum sequi perferendis nemo
              reprehenderit asperiores, illo reiciendis pariatur deserunt
              officiis obcaecati quos!
            </p>
            <ul>
              <li>sevice 1</li>
              <li>sevice 2</li>
              <li>sevice 3</li>
              <li>sevice 4</li>
              <li>sevice 5</li>
              <li>sevice 6</li>
            </ul>
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              debitis non nesciunt dolorum optio, dignissimos, ullam accusantium
              et laboriosam soluta reiciendis consequuntur magni fugiat libero
              illo aspernatur pariatur nostrum suscipit nisi? Facilis, nam eos
              suscipit nostrum tenetur reiciendis error doloribus assumenda
              voluptates sunt quasi pariatur, dolor molestias ducimus quia ullam
              exercitationem quidem ipsam delectus est soluta.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

export default about;
