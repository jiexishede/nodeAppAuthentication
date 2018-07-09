const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// Create a schema
const userSchema = new Schema({
    // email: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    // password: String,
    password: {
        type: String,
        required: true
    }

});

userSchema.pre('save', async function(next) {
    // this. password 
    try {
        // Generate a salt 
        const salt = await bcrypt.genSalt(10);
        // Generate a password hash (salt + hash)
        const passwordHash = await bcrypt.hash(this.password, salt);
        // console.log('salt==', salt);
        // console.log('normal password', this.password);
        // console.log('hashed password', passwordHash);
        // Re -assign hashed version over original, plain text password
        this.password = passwordHash;

        next();

    } catch (error) {
        next(error);
    }
});

// 注意这里是 method 不是 methods
userSchema.methods.isValidPassword = async function(newPassword) {
    try {
        return await bcrypt.compare(newPassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
}

// Create a model
const User = mongoose.model('user', userSchema);

// Export the model
module.exports = User;