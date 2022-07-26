/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

function contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {name, email, phone, desc};
    if (name !== "" && email !== "" && phone !== ""&& desc !== "") {
      fetch("http://localhost:3000/api/postcontact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.text())
        .then((data) => {
          // console.log("Success:", data);
          alert('Thanks for Contacting Us');
          setName('');
          setEmail('');
          setPhone('');
          setDesc('');
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert('Sorry, You cannot Submit without fill form. Please,Fill all credencials');
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "desc") {
      setDesc(e.target.value);
    }
  };

  return (
    <>
      <Head>
        <title>Next Blog | contact</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
            <h1 className={styles.heading}>Contact US</h1>
            <form onSubmit={handleSubmit} className={styles.mainForm}>
              <div className={styles.mb3}>
                <label htmlFor="name" className={styles.formLable}>
                  Name:
                </label>
                <input
                  type="name"
                  className={styles.formInput}
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className={styles.mb3}>
                <label
                  htmlFor="exampleInputEmail1"
                  className={styles.formLable}
                >
                  Email address:
                </label>
                <input
                  type="email"
                  className={styles.formInput}
                  value={email}
                  name="email"
                  onChange={handleChange}
                  id="exampleInputEmail1"
                  placeholder="Enter Your Email Address"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className={styles.textMsg}>
                  We wll never share your email with anyone else.
                </div>
              </div>
              <div className={styles.mb3}>
                <label htmlFor="phone" className={styles.formLable}>
                  Phone No.:
                </label>
                <input
                  type="number"
                  className={styles.formInput}
                  value={phone}
                  name="phone"
                  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  id="phone"
                />
              </div>
              <div className={styles.mb3}>
                  <label htmlFor="desc" className={styles.formLable}>
                    Elaborate Your concern:
                  </label>
                  <textarea
                    className={styles.formTextInput}
                    placeholder="Write Your Query Here.."
                    value={desc}
                    name="desc"
                    onChange={handleChange}
                    id="desc"
                  />
                </div>
              <button type="submit" className={styles.formbutton}>
                Submit
              </button>
            </form>
        </main>
      </div>
    </>
  );
}

export default contact;
