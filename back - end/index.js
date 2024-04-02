const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const morgan = require('morgan')
const routes=require('./Routes/index')
const { createServer } = require("http");
const { Server } = require("socket.io");
const {chat} = require('./Controller/chat')
const { auth } = require('./middleware/JWTAUTH')


require('dotenv').config()

const PORT=process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.json('Server is working successfully')
})
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });

  app.use(routes)

  app.use(morgan('dev'));
// Creating traditional server for socket.io  
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.ORGIN,
    credentials:true
  },
  allowRequest:auth
});
io.on("connection",chat );
module.exports.io=io
server.listen(PORT,(req,res)=>{
    console.log(`server listening on port ${PORT}`);
})