import connectToMongo from '../../db/conn';
import jwt from 'jsonwebtoken';
import User from '../../models/User';
const bcrypt = require("bcrypt");

export default async function handlerRegister(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new User({ username,email,password:hashedPassword });
    await newUser.save();
    
    return res.status(201).json({message: 'User registered successfully'});
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
