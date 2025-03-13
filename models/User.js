import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
require('dotenv').config();

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});


// userSchema.methods.generateToken = async function () {
//   try{
//     return jwt.sign({
//       username:this.username,
//       email:this.email,
//       password:this.password,
//     },
//     process.env.JWT_SECRET_KEY,
//     {
//       expiresIn:"5m",
//     });
//   }
//   catch(error){
//     throw error;
//   }
  
// };


// const User = mongoose.model('User', userSchema);
export default mongoose.models.User || mongoose.model('User', userSchema);