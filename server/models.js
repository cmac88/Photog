const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    imageURL: String
}, {timestamps: true});


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, " Name is required"]

    },
    password: {
        type: String,
        required: [true, " Password is required"]
    },
    
}, {timestamps: true});

// UserSchema.path('name').validate({
//     isAsync: true,
//     validator: function(value, done) {
//         mongoose.model('users', UserSchema).count({name: value}, function(errs,count){
//             if (errs) {
//                 return done(errs);
//             }
//         done(!count);
//         });
//     },
//     message: 'That name already exists'
// });

function createUserConnection(db_string){
    mongoose.connect(db_string);
    return mongoose.model('users', UserSchema);

}

module.exports = createUserConnection;