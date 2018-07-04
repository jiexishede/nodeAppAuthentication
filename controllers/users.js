const User = require('../models/user');

module.exports = {
    signUp: async(req, res, next) => {
        // promiss-router 有了这些代码
        // try {
        //     [OUR CODE]
        // } catch (error) {
        //     next(error);
        // }
        // Email && Password
        console.log('conents of req.value.body', req.value.body);
        console.log('UsersController.signUp() called!');
        const { email, password } = req.value.body; // 对象解构
        // // const email = req.value.body.email;
        // // const password = req.value.body.password;

        // Check if there is a user with the same email

        const foundUser = await User.findOne({ email: email });
        if (foundUser) {
            return res.status(403).send({ error: 'Email is already in use' })
        }
        // Create a new user







        const newUser = new User({
            email,
            password
            // email: email, // 一样可以省略
            // password: password
        });

        // The await operator is used to wait for a Promise. It can only be used inside an async function.
        await newUser.save();


        // Respond with token

        res.json({
            user: 'created'
        });
    },

    signIn: async(req, res, next) => {
        // Generarte token
        console.log('UsersController.signIn() called!');
    },
    secret: async(req, res, next) => {
        //
        console.log('UsersController.secret() called!');
    }


}