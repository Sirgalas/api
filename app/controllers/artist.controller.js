var artists =[
    {
        id:1,
        name:'Sabaton'
    },
    {
        id:2,
        name:"Mettalica"
    },
    {
        id:3,
        name:"Deep Purple"
    }
];
exports.findAll = function(req,res){
    res.send(artists);
}

exports.create=function(req,res){
    if(!req.body) return res.sendStatus(400);
    var artist={
        id:Date.now(),
        name:req.body.name
    }
    artists.push(artist);
    res.send(artist);
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