const artists =[
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
    var requestPut=JSON.stringify(req.body,null,1)
    artist.name = req.body.name;
    console.log(requestPut);
    res.send(artist);
}

exports.findOne=function(req,res){
    const artist = artists.find(function(artist){
        return artist.id === Number(req.params.id);
    })
    
    res.send(artist);
}