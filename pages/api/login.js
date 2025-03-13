import mongoose from 'mongoose';
// pages/api/login.js
import connectToMongo from '../../db/conn';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function handlerLogin(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email, password } = req.body;
  

  try {
    connectToMongo();
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    else{
    const passwordMatch = await bcrypt.compare(password, user.password);
    // const token = await user.generateToken();
    // console.log(token);


    if (passwordMatch) {
      const token = jwt.sign({email,password},'jwtsecret',{expiresIn: '1h'});
      return res.status(200).json({token});
      
    
    } else {
      return res.status(401).json({ error:"Invalid login Credentials"  });
    }
  }
}
catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
}
};
