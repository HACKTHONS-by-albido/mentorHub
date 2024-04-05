const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const morgan = require('morgan')
const routes=require('./Routes/index')
const { createServer } = require("http");
const { Server } = require("socket.io");
const { auth } = require('./middleware/JWTAUTH')
const messageSchema=require('./Model/message');
const userSchema = require('./Model/userSchema');
const jwt = require("jsonwebtoken");
const conversation = require('./Model/conversation')
const message = require('./Model/message')

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
  // allowRequest:auth
});
io.on("connection",(socket) => {
  socket.on('joinRoom', (fromId) => {
    jwt.verify(fromId,process.env.JWT, async function (err, data) {
      if (err) {
        console.log({ status: "failure",message:err.message });
         
      } else {
        const userId=await userSchema.findOne({_id:data.id})
        const roomid=userId._id
        
        socket.join(roomid)
        const msgs=await userSchema.findOne({_id:data.id}).populate({ 
          path: 'chats',
          options: {strictPopulate: false},
          populate: {
            path: 'peoples messages',
            populate:{
              path:'ToId FromId',
              options: {strictPopulate: false},
              select:'-chats'
            },
            options: {strictPopulate: false}
          } 
       })
       console.log(msgs);
        io.in(roomid).emit('joinRoom',msgs);

      }
    });
  });
  socket.on('privateMsg',(fromId,toId) => {
    jwt.verify(fromId,process.env.JWT, async function (err, data) {
      if (err) {
        console.log({ status: "failure",message:err.message });
         
      } else {
        const userId=await userSchema.findOne({_id:data.id})
        const room=userId._id+toId
        socket.join(room.split('').sort((a,b)=>a-b).join('')) 
        const roomid=room.split('').sort((a,b)=>a-b).join('')
       const private1=await conversation.findOne({peoples:{ $all : [data.id, toId] }}).populate({
        path:'messages',
        populate:{
          path:'ToId FromId',
          select:'-chats'
        }
       })
       const private=private1.messages
       
       console.log(private);
        io.in(roomid).emit('privateMsg',private);

      }
    });
  })
   
  } );
server.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})