const mongoose=require('mongoose')


before((done)=>{
	mongoose.connect('mongodb://localhost/testaroo')
mongoose.connection.once('open',()=>{
	console.log('connected to database..')
	done()
}).on('error',(err)=>{
	console.log('failed to connect to database',err)
})
})
beforeEach((done)=>{
mongoose.connection.collections.mariochars.drop(()=>{
	done();
})
})