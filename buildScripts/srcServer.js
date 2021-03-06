import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js'

const compiler = webpack(config);
const port = 5001;
const app = express();

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath:config.output.publicPath
}));

app.get('/', function(req, res){
res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
    if(err){
console.log(err);
    }
else{
open('http://localhost:'+port);
}
app.get('/users', function(req, res){
res.json([
{"id":1, "firstname":"kamal", "lastname":"pandey", "email":"xyz@konfinity.com" },
{"id":2, "firstname": "agent", "lastname":"smith", "email":"new@matrix.com"},
{"id":3, "firstname":"good", "lastname":"god", "email":"heaven@god.com"}
]);
});
});
