// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogData");
  data = data.slice(0, req.query.count);
  let myfile;
  let allBlog = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogData/" + item, "utf-8");
    allBlog.push(JSON.parse(myfile));
  }
  res.status(200).json(allBlog);       
  // let allBlog = [];
  // data.forEach((item) => {
  //   console.log(item);
  //   fs.promises.readFile(('blogData/' + item), (d) => {
  //     allBlog.push(d);
  //   })
  // })
  // res.status(200).json(allBlog);
}
