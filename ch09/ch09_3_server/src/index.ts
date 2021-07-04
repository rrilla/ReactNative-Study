import internalIP from 'internal-ip'
import fs from 'fs'
import path from 'path'
import {createExpressServer} from './express'
import {authRouter} from './routers'

const port = 4000
const publicDirPath = path.join(process.cwd(), 'public')

if (false == fs.existsSync(publicDirPath)) fs.mkdirSync(publicDirPath)
internalIP.v4().then(runServer)

function runServer(ip: string | undefined) {
  if (!ip) {
    console.log('error can\t find your ip address.')
    process.exit()
  }
  const app = createExpressServer()
  app
    .get('/', (req, res) => res.json({message: 'Hello world'}))
    .use('/auth', authRouter())
    .listen(port, () => console.log(`server started at http://${ip}:${port}`))
}
