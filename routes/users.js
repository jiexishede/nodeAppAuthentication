const express = require('express');
// const router = express.Router;
const router = require(`express-promise-router`)(); // 会自动 做一些 try catch
const UsersController = require('../controllers/users');

router.route('/signup') /// signup 将会在 './user' 后面
    .post(UsersController.signUp);

router.route('/signin')
    .post(UsersController.signIn);


router.route('/secret')
    .get(UsersController.secret);


module.exports = router;