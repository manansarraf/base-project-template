const express = require('express')

const { ServerConfig,Logger } = require('./config')
const {PORT} = require('./config');
const apiRoutes = require('./routes')

const app = express();

app.use('/api',apiRoutes);

app.get('/',(req,res)=>{
    res.send("hey")
})
app.listen(ServerConfig.PORT,()=>{
    console.log(`successfully started the server on Port: ${ServerConfig.PORT}`);
})
