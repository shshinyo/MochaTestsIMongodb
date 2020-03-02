const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
const Schema=mongoose.Schema;

const marioSchema=new Schema({
	name:String,
	weight:Number
})
const marioChar =  mongoose.model('mariochar',marioSchema)
module.exports=marioChar;