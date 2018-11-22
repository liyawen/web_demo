const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

app.use(async ctx => {
  if (ctx.url === '/') {
    ctx.body = fs.readFileSync('./index.html', { encoding: 'utf8' });
  }
});

app.listen(3001);
