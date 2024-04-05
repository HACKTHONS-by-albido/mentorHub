const mongoose=require('mongoose')
const messageSchema=mongoose.Schema({
    ToId:{type:mongoose.SchemaTypes.ObjectId,ref:'user'},
    FromId:{type:mongoose.SchemaTypes.ObjectId,ref:'user'},
    message:String,
    isOpen:[{type:mongoose.SchemaTypes.ObjectId,ref:'user'}]

},{ timestamps: true })
module.exports=mongoose.model('messages',messageSchema)
