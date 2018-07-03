const express = require('express');
// const router = express.Router;
const router = require(`express-promise-router`)(); // 会自动 做一些 try catch
const { validateBody, schemas } = require('../helpers/routeHelpers');

const UsersController = require('../controllers/users');


router.route('/signup') /// signup 将会在 './user' 后面
    .post(validateBody(schemas.authSchema), UsersController.signUp); // 每个 参数函数 一次 执行

router.route('/signin')
    .post(UsersController.signIn);


router.route('/secret')
    .get(UsersController.secret);


module.exports = router;