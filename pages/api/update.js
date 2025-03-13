// // import connectToMongo from '../../db/conn';

// // import User from '../../models/User';
// // const bcrypt = require("bcrypt");

// // export default async function handlerUpdate(req, res) {
// //   if (req.method !== 'POST') {
// //     return res.status(405).json({ message: 'Method Not Allowed' });
// //   }

// //   const { email, password, cpassword } = req.body;

// //   try {
// //     // const existingUser = await User.findOne({ email });

// //     // if (existingUser) {
// //     //   return res.status(400).json({ message: 'Email already in use' });
// //     // }

// //     if(password == cpassword){
// //     const hashedPassword = await bcrypt.hash(cpassword,10);
// //     const updateUser = await User.updateOne({email:email},{$set:{password:hashedPassword}})

// //     return res.status(201).json({ message: 'User updated successfully' });
// //     }  
// // } catch (error) {
// //     console.error(error);
// //     return res.status(500).json({ message: 'Internal Server Error' });
// //   }
// // };
// import connectToMongo from '../../db/conn';
// import User from '../../models/User';
// const bcrypt = require("bcrypt");

// export default async function handlerUpdate(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { email, password, cpassword } = req.body;

//   try {
//     // Connect to MongoDB
//     await connectToMongo();

//     // Find user by email
//     const existingUser = await User.findOne({ email });

//     if (!existingUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Compare passwords
//     if (password !== cpassword) {
//       return res.status(400).json({ message: 'Passwords do not match' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Update user document
//     const updateUser = await User.updateOne({ email:email }, { $set: { password: hashedPassword } });

//     if (updateUser.ok === 1) {
//       return res.status(200).json({ message: 'User updated successfully' });
//     } else {
//       return res.status(500).json({ message: 'Failed to update user' });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

import connectToMongo from '../../db/conn';

import User from '../../models/User';
const bcrypt = require("bcrypt");

export default async function handlerUpdate(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password, cpassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    // if (existingUser) {
    //   return res.status(400).json({ message: 'Email already in use' });
    // }
    if(existingUser){
    if(password == cpassword){
    const hashedPassword = await bcrypt.hash(cpassword,10);
    const updateUser = await User.updateOne({email:email},{$set:{password:hashedPassword}})

    if(updateUser){
    return res.status(201).json({ message: 'User updated successfully' });
    }
    else{
      console.log("Password not updated");
    }
  }
}  
} catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
