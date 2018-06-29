const bp = require('body-parser');
const api = require('./controllers');

function appAPI(app){
    app.use(bp.json());
    app.get('/api/user', (req,res) => api.readAll(req,res));
    app.post('/api/user', (req, res) => api.addUser(req,res));
    app.get('/api/user/:name', (req, res) => api.readOne(req,res));
    app.put('/api/user/:id', (req, res) => api.updateOne(req,res));
    app.delete('/api/user/:id', (req, res) => api.deleteOne(req,res));

}

module.exports = appAPI;