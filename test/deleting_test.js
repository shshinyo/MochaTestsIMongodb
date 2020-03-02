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

	it("deleting a char from DB", function (done){
        
     marioChar.findOneAndRemove({name:"hema"}).then(()=>{
        	 marioChar.findOne({name:"hema"}).then((res)=>{
                assert(res===null)
             })
        })
       
        done()

	})
	
})