import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const allFile = await fs.promises.readdir('contactdata');
    fs.writeFile(`contactdata/${allFile.length + 1}.json`, JSON.stringify(req.body), ()=>{})
    res.status(200).json(req.body);
    // Process a POST request
  } else {
    // Handle any other HTTP method
    res.status(200).json(["allBlogs"]);
  }
}