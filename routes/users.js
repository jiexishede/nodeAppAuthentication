const express = require('express');
// const router = express.Router;
const router = require(`express-promise-router`)(); // 会自动 做一些 try catch

const passport = require('passport');
const passportConf = require('../passport'); // 这个 必须要有, 才可以 让 验证 的逻辑 使用.
const { validateBody, schemas } = require('../helpers/routeHelpers');

const UsersController = require('../controllers/users');

const passportSignIn = passport.authenticate('local', { session: false });
// self                passport.authenticate('local', { session: false })



const passportJWT = passport.authenticate('jwt', { session: false });

router.route('/signup') /// signup 将会在 './user' 后面
    .post(validateBody(schemas.authSchema), UsersController.signUp); // 每个 参数函数 一次 执行

router.route('/signin')
    .post(validateBody(schemas.authSchema), passportSignIn, UsersController.signIn);

//如果  passport.authenticate('jwt, {session: false}) 不存在, 那么 不会进入  UsersController.secret 的函数里面
router.route('/secret')
    .get(passportJWT, UsersController.secret);

// router.route('/secret')
//     .get(passportJWT, UsersController.secret);

module.exports = router;