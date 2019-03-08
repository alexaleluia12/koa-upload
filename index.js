const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

const uploadFunction = require('./upload');

const router = Router();
const app = new Koa();


router.post('/up', uploadFunction);

router.get('/hello', async (ctx) => {
    ctx.body = {"msg": "ok"};
});

// +++++++++++++++++++++++++
const MAX_BODY = 1000; // 1kb
// config koa-body
app.use(koaBody({
    multipart: true,
    json: true, 
    formLimit: MAX_BODY,
    textLimit: MAX_BODY,
    onError: (error, context) => {
        if (error)
          console.error(error);
    }
}));
// +++++++++++++++++++++++++

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 3701;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server runing on ${HOST}:${PORT}`);
});
