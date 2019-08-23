const artistsModel = require('../models/artist');

exports.findAll = function(req,res){
    res.send(artistsModel.findAll);
}

exports.create=function(req,res){
    if(!req.body) return res.sendStatus(400);
    console.log()
    let x=artistsModel.create(req.body);
    res.send(x);
}

exports.update=function(req,res){
    var artist = artists.find(function(artist){
        return artist.id === Number(req.params.id);
    });
    artist.name = req.body.name;
    console.log(artist);
    res.sendStatus(200);
}

exports.findOne=function(req,res){
    const artist = artists.find(function(artist){
        return artist.id === Number(req.params.id);
    })
    
    res.send(artist);
}

exports.deleteOne=function(req,res){
    artists=artists.filter(function(artist){
        return artist.id !== Number(req.params.id);
    });
    res.sendStatus(200);
}