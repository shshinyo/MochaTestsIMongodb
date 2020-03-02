const assert=require('assert');
const marioChar= require('../mariochar/mariochar');

describe("perform some tests",()=>{

	it("saving a record into database",function (done){
      var char = new marioChar({name:"hema"})
          char.save().then(function (){
         assert(char.isNew===false);
         done();
    })
	})
})