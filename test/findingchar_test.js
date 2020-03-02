const assert=require('assert');
const marioChar= require('../mariochar/mariochar');

describe("perform some tests",()=>{

       var char;
	beforeEach((done)=>{
		  char = new marioChar({name:"hema"})
          char.save().then(function (){
        
         done();
    })
	})

	it("finding a char in DB", function (done){
        
     marioChar.findOne({name:"hema"}).then((res)=>{
        	 assert(res.name==="hema")
        	
        })
       
        done()

	})
	it("finding a char by ID in DB", function (done){   
     marioChar.findOne({_id:char._id}).then((res)=>{
        	 assert(res._id.toString()===char._id.toString())
        	
        })
       
        done()

	})
})