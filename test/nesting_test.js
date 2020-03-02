const mongoose=require('mongoose');
const assert=require('assert');
const Author=require('../mariochar/author');

describe("nesting tests",function(){
   beforeEach((done)=>{
    mongoose.connection.collections.authors.drop(()=>{
     console.log("droped successfully")
    	done()

    })
	})
   it("add an author with a nesting book object in DB",(done)=>{
     var hema=new Author({name:'hemaaa',age:25,books:[{title:"dream book",pages:1000}]})
      hema.save().then(()=>{
      	Author.findOne({name:'hemaaa'}).then((res)=>{
      		assert(res.books.length===1)
      		done()
      	})

      })


   })
   it("add a book to author books",function(done){
   	var hema=new Author({name:'hemaaa',age:25,books:[{title:"dream book",pages:1000}]})
      hema.save().then(()=>{
      	Author.findOne({name:'hemaaa'}).then((record)=>{
      		record.books.push({title:'horus',pages:12})
      		record.save().then(()=>{
              Author.findOne({name:'hemaaa'}).then((res)=>{
              	assert(res.books.length===2)
              	done()

              })
      		})

      	})
      })

   })
})