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
const messageSchema=require('./Model/message');
const userSchema = require('./Model/userSchema');
const jwt = require("jsonwebtoken");

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
module.exports.io=io
io.on("connection",(socket) => {
  socket.on('joinRoom', (fromId,toId) => {
    jwt.verify(fromId,process.env.JWT, async function (err, data) {
      if (err) {
        console.log({ status: "failure",message:err.message });
         
      } else {
        const userId=await userSchema.findOne({_id:data.id})
        const room=userId._id+toId
        socket.join(room.split('').sort((a,b)=>a-b).join('')); 
        const roomid=room.split('').sort((a,b)=>a-b).join('')
        const msgs = await messageSchema.find({$and:[{ToId:toId,FromId:userId._id}]}).populate('ToId FromId')
        
        io.to(roomid).emit('chatMessage',msgs);

      }
    });
  });
    socket.on("chatMessage", async (msg,fromId,toId) => {
      
      jwt.verify(fromId,process.env.JWT, async function (err, data) {
        if (err) {
          console.log({ status: "failure",message:err.message });
           
        } else {

          const userId=await userSchema.findOne({_id:data.id})
          console.log(userId);
          const room=userId._id+toId
          const roomid=room.split('').sort((a,b)=>a-b).join('')
          
          console.log(roomid);
          if (msg) {
            await messageSchema.create({
                ToId:toId,
                FromId:userId._id,
                message: msg,
            });
            await userSchema.updateOne({_id:userId._id},{$pull:{chats:toId}})
            await userSchema.updateOne({_id:userId._id},{$push:{chats:toId}})
            await userSchema.updateOne({_id:toId},{$pull:{chats:userId._id}})
            await userSchema.updateOne({_id:toId},{$push:{chats:userId._id}})

          }
          
        }
      });
    });
  } );
server.listen(PORT,(req,res)=>{
    console.log(`server listening on port ${PORT}`);
})