const mongoose = require('mongoose');
const validate = require('mongoose-validator')

const ImageSchema = new mongoose.Schema({
    imageURL: String
}, {timestamps: true});

//creating validator
var passwordValidator = [
    validate({
        validator: 'equals',
        arguments: 'peanuts2',
        message: 'Password must be correct'
    })
];
var nameValidator = [
    validate({
        validator: 'equals',
        arguments: 'Marvin',
        message: 'Name must be correct'
    })
];
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, " Name is required"],
        validate: nameValidator,

    },
    password: {
        type: String,
        required: [true, " Password is required"],
        validate: passwordValidator,
    },
    
}, {timestamps: true});

// UserSchema.path('password').validate({
//     isAsync: true,
//     validator: function(value, done) {
//         mongoose.model('users', UserSchema).count({password: value}, function(errs,count){
//             if (errs) {
//                 return done(errs);
//             }
//         done(!count);
//         });
//     },
//     message: 'That pasword must match'
// });

function createUserConnection(db_string){
    mongoose.connect(db_string);
    return mongoose.model('users', UserSchema);

}

module.exports = createUserConnection;