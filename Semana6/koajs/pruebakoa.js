const Koa = require('koa');
const app = new Koa();

// response
app.use(async ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);