const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  if (ctx.originalUrl.split('?')[0] === '/jsonp') {
    const callback = ctx.originalUrl.split('?')[1].split('=')[1];
    const data = '连接成功！';
    ctx.body = `${callback}('${data}')`;
  } else {
    ctx.body = 'Hello World';
  }
});

app.listen(3003);
