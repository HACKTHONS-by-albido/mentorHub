const { io } = require('..');
const messageSchema=require('../Model/message')

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
          }
          const msgs = await messageSchema.find({$and:[{ToId:toId,FromId:fromId}]}).populate('ToId FromId')
      
          io.to(toId).emit('private',msgs);
        });
      },
}