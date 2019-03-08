# Demo upload file koa multipart/form-data(reproduce-error)

koa-body `formLimit` is not working

Not **production** code.

## Run
```sh
npm i
npm run start
```

## Objective
limite file size to 1kb

```js
const MAX_BODY = 1000;

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
```

I can send files more than 1k


## endpoint
```txt
POST localhost:3701/up
    // body
    {
        file: (binary content)
    }
```

## related issues
- https://github.com/dlau/koa-body/issues/66
- https://github.com/felixge/node-formidable/issues/324
