const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        unique: [true, " The user name must be unique"],
        type: String,
        required: [true, " Name is required"],
        minlength: [3, " The name must be at least 3 characters"],

    },
    email: {
        type: String,
        required: [true, ' Email is required'],
        minlength: [3, ' Email must be at least 3 characters'],
    },

    password: {
        type: String,
        required: [true, " Type is required"],
        minlength: [3, " Type must be at least 3 characters"],
    },
    
}, {timestamps: true});

UserSchema.path('name').validate({
    isAsync: true,
    validator: function(value, done) {
        mongoose.model('users', UserSchema).count({name: value}, function(errs,count){
            if (errs) {
                return done(errs);
            }
        done(!count);
        });
    },
    message: 'That name already exists'
});

function createUserConnection(db_string){
    mongoose.connect(db_string);
    return mongoose.model('users', UserSchema);

}

module.exports = createUserConnection;