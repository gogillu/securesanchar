var mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/secure',function(err){
    if(err)
        console.log(err)
    else
        console.log('connection successful')
});
db=mongoose.connection

module.exports=db