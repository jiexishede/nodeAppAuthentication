const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// mongoose.Promise = global.Promise; // 加上防止 警告
mongoose.connect('mongodb://localhost:27017/APIAuthentication');


const app = express();

/**
package.json:
"start-dev": "nodemon app.js",

nodemon 检测 变化 自动重启, 用于在开发中加快开发速度

`yarn start-dev` 就可以诶 执行 在 package.json 里面 的文件

`npm run start-dev` 也可以 

每保存一次,自动重启

*/


// Middlewares
// morgan  是用来 输入 日志 用的!
// 可以 写入一个 文件 或者 将日志输入 数据库中

app.use(morgan('dev')); //https://www.cnblogs.com/chyingp/p/node-learning-guide-express-morgan.html
//body-parser是非常常用的一个express中间件，作用是对post请求的请求体进行解析。使用非常简单，以下两行代码已经覆盖了大部分的使用场景。

/*

body-parser实现的要点如下：

处理不同类型的请求体：比如text、json、urlencoded等，对应的报文主体的格式不同。
处理不同的编码：比如utf8、gbk等。
处理不同的压缩类型：比如gzip、deflare等。
其他边界、异常的处理。
*/

app.use(bodyParser.json()); // https://www.cnblogs.com/chyingp/p/nodejs-learning-express-body-parser.html


// Routes
//http://localhost:3000/users/signin  
//http://localhost:3000/users/scret

app.use('/users', require('./routes/users'));

// Start the server

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`server listening at ${port}`);