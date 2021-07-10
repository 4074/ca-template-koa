import path from 'path'
import Koa from 'koa'
import KoaAutoboot from 'koa-autoboot'

const app = new Koa()
app.use(
  KoaAutoboot({
    dir: path.join(__dirname, 'controllers')
  })
)
app.listen(4000)