/* 
  https://www.youtube.com/watch?v=BmPUqg8A4PM
*/

const experss = require('express');
const bodyParser = require('body-parser');
const app = experss();

var db;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require('./app/routers/router.js')(app);

app.listen(3012,function(){
    console.log('API app started')
});
