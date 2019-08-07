module.exports = function(app) {

    var artist = require('../controllers/artist.controller.js');

    app.get('/',function(req,res){
        res.send('Hello API');
    });

    app.get('/index',artist.findAll);

    app.post('/create',artist.create);

    app.put('/update/:id',artist.update);

    app.get('/view/:id',artist.findOne);

    app.delete('/delete/:id',artist.deleteOne);
}