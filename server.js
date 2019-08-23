/* 
  https://www.youtube.com/watch?v=BmPUqg8A4PM
*/

const experss = require('express');
const bodyParser = require('body-parser');
const app = experss();
var path 		= require('path');

var db;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

require('./app/routers/router.js')(app);

app.listen(3012,function(){
    console.log('API app started')
});
