const { promisify } = require('util')
const fs = require('fs');
const path = require('path');

const PATH_WHITE = 'uploads';

module.exports = async function upload(ctx) {
    let file = ctx.request.files.file;
    const newName = (Math.random()*10000).toString().substring(0, 3) + '-' + file.name;

    const pRename = promisify(fs.rename);
    try {
        await pRename(file.path, path.join(PATH_WHITE, newName));
        console.log(`remove old file: ${file.path}`);
        ctx.status = 200;
        ctx.body = {"message": "upload ok"};
    } catch (error) {
        console.error(error);
        ctx.status = 500;
        ctx.body = {"message": "internal error"};
    }

};