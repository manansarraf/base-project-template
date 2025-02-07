const express = require('express')

const {PORT} = require('./config');
const apiRoutes = require('./routes')

const app = express();

app.use('/api',apiRoutes);

app.get('/',(req,res)=>{
    res.send("hey")
})
app.listen(PORT,()=>{
    console.log(`successfully started the server on Port: ${PORT}`);
})
