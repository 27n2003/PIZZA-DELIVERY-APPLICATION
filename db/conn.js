const mongoose=require('mongoose');
const mongoURI="mongodb://127.0.0.1:27017/nextjs1";

const connectToMongo = async() => {

    const conn = await mongoose.connect(mongoURI);
    if(conn){
        console.log("MongoDB Successfully Connected");
    }
}

connectToMongo();
module.exports=connectToMongo;
