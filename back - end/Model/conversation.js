const mongoose=require('mongoose')
const conversation=mongoose.Schema({
    peoples:[{type:mongoose.SchemaTypes.ObjectId,ref:'user'}],
    messages:[{type:mongoose.SchemaTypes.ObjectId,ref:'messages'}],

},{ timestamps: true })
module.exports=mongoose.model('conversation',conversation)
