import express from 'express'
import path from 'path'
import fs from 'fs'

//prettier-ignore
const hostname = 'localhost', port = 4000;
const app = express()

//prettier-ignore
// app
//   .get('/', (req, res) => {
//     res.json({message: 'Hello world!'});
//   })
//   .listen(port, () => console.log(`server started at http://${hostname}:${port}`),
//   );

const publicDirPath = path.join(process.cwd(), 'public')
if (false == fs.existsSync(publicDirPath)) fs.mkdirSync(publicDirPath)
//prettier-ignore
app
  .use(express.static('public'))
  .get('/', (req, res) => {
    res.json({message: 'Hello world!'});
  })
  .listen(port, () => console.log(`server started at http://${hostname}:${port}`),
  );
