const Users = require('./models')('mongodb://localhost/users');

let good = (data) => ({status: 'good', data:data});
let bad = (errs) => ({status: 'bad', data:errs});

function readAll(req,res){
    Users.find({})
        .sort({type:1})
        .then(data=>res.json(good(data)))
        .catch(errs=>res.json(bad(errs)));
}

function addUser(req,res){
    Users.create(req.body)
        .then(data=>res.json(good(data)))
        .catch(errs=>res.json(bad(errs)));
}
function readOne(req,res){
    Users.findById(req.params.id)
        .then(data=>res.json(good(data)))
        .catch(errs=>res.json(bad(errs)));
}
function updateOne(req,res){
    console.log('This is the controller speaking', req.body);
    // console.log(req.params.id);
    Users.findByIdAndUpdate(req.params.id, {$set:{name:"HAHAHA"}}, (data)=>{
        console.log(data);
        Users.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
            .then(data=>res.json(good(data)))
            .catch(errs=>res.json(bad(errs)));
    });
}
function deleteOne(req,res){
    Users.findByIdAndRemove(req.params.id)
        .then(data=>res.json(good(data)))
        .catch(errs=>res.json(bad(errs)));
}
// function addLike(req,res){
//     Users.findOneAndUpdate({_id : req.params.id}, req.body, { new:true })
//         .then(data=>res.json(good(data)))
//         .catch(errs=>res.json(bad(errs)));
// }
module.exports = {readAll, addUser, readOne, updateOne, deleteOne,};