import User from '../../models/User';
import connectToMongo from '@/db/conn';
const nodemailer = require('nodemailer');
import Otp from '../../models/Otp';
const jwt = require("jsonwebtoken");

function generateOTP() {
 
    // Declare a digits variable
    // which stores all digits 
    let digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

export default async function authe(req,res)
{
   
    try
    {
        let o=generateOTP();         
        connectToMongo();         
        console.log("OTP of 4 digits: ")
        

        var email=req.body.email;
        const r={email:email};
        const result=await User.findOne(r);
        const payload = {
          email:email
        }
      
        const secret_key = "1234";
        const options = {
          expiresIn:'5m'
        }
        const token = jwt.sign(payload, secret_key,options);
      
        if(result)
        {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'akutomkar@gmail.com',
                  pass: 'fzub utwv tchv dsfu',
                }
              });
              
              var mailOptions = {
                from: 'akutomkar@gmail.com',
                to: email,
                subject: 'OTP for reseting the Password',
                text:`Your OTP is ${o}`,
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
              


              const otpUser = new Otp({email:email , otp:o});
              await otpUser.save();                             
              return res.status(200).json({ message: 'Otp sent successfully' });
        }
        else
        {
            return res.status(401).json({ error: 'Invalid Email address' });
        }

    }
    catch(err)
    {
        console.error(err);
    }
 
}