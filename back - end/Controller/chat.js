const messageSchema=require('../Model/message');
const userSchema = require('../Model/userSchema');
const jwt = require("jsonwebtoken");
const { io } = require("..");

module.exports={
    chat:(socket) => {
      socket.on('joinRoom', (fromId,toId) => {
        jwt.verify(fromId,process.env.JWT, async function (err, data) {
          if (err) {
            console.log({ status: "failure",message:err.message });
             
          } else {
            const userId=await userSchema.findOne({_id:data.id})
            const room=userId._id+toId
            socket.join(room.split('').sort((a,b)=>a-b).join('')); 
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
              const msgs = await messageSchema.find({$and:[{ToId:toId,FromId:userId._id}]}).populate('ToId FromId')
              
              io.to(roomid).emit('private',msgs);
            }
          });
        });
      },
}