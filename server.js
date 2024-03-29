const express = require('express');
const connectDB = require('./config/db');
const cors =  require('cors');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
// conect db

connectDB();

// init Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json({extended:false}));
app.use(cors());

// Define Routes
app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/prouduct',require('./routes/api/proudct'))

// serve static assets in producion
if(process.env.NODE_ENV === 'production'){
   // set static folder
    app.use(express.static('client/build'))

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


const PORT = process.env.PORT || 5000;


app.listen(PORT , ()=> console.log(`server sterted on port ${PORT}`));