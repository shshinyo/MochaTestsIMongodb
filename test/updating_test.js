const assert=require('assert');
const marioChar= require('../mariochar/mariochar');

describe("perform some tests",()=>{

       var char;
	beforeEach((done)=>{
		  char = new marioChar({name:"hema",weight:30})
          char.save().then(function (){
         done();
    })
	})

	it("Updating a char in DB", function (done){
        
     marioChar.findOneAndUpdate({name:"hema"},{name:"shishinyo"}).then(()=>{
        	 marioChar.findOne({_id:char._id}).then((res)=>{
                assert(res.name==="shishinyo")
             })
        })
       
        done()

	})
    it("Updating the weight of all chars by 1 in DB", function (done){
        marioChar.update({},{$inc:{weight:1}}).then(()=>{
            marioChar.findOne({name:"hema"}).then((res)=>{
                assert(res.weight===31)
                done()
            })
        })
        
     

    })
	
})