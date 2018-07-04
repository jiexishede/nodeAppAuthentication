const mongoose = require('mongoose');
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

// Create a model
const User = mongoose.model('user', userSchema);

// Export the model
module.exports = User;