const exprsss = require('express');
const bodyParser = require('body-parser');
const app = exprsss();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req,res)=>{
    res.send({message:'Hello!!!!'});
} );

app.listen(port, ()=>console.log(`start ${port} `) );