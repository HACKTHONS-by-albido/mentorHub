const { io } = require('..');
const messageSchema=require('../Model/message');
const userSchema = require('../Model/userSchema');

module.exports={
    chat:(socket) => {
        socket.on("chat message", async (msg,fromId,toId) => {
          console.log(msg);
          if (msg) {
            await messageSchema.create({
                ToId:toId,
                FromId:fromId,
                message: msg,
            });
            await userSchema.updateOne({_id:fromId},{$pull:{chats:toId}})
            await userSchema.updateOne({_id:fromId},{$push:{chats:toId}})
            await userSchema.updateOne({_id:toId},{$pull:{chats:fromId}})
            await userSchema.updateOne({_id:toId},{$push:{chats:fromId}})

          }
          const msgs = await messageSchema.find({$and:[{ToId:toId,FromId:fromId}]}).populate('ToId FromId')
          
          io.to(toId).emit('private',msgs);
        });
      },
}