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