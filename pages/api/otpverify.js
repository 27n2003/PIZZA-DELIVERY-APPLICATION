import './otp';
import Otp from '../../models/Otp';
import connectToMongo from '../../db/conn';

export default async function update(req,res)
{
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }    
    try
    {
        connectToMongo();
        
    // Access other data as needed
  


        const{email,otp} = req.body
        console.log("OTP:",otp);
        const userOtp = await Otp.findOne({otp});

        if(userOtp){
            return res.status(200).json({ message: 'Otp sent successfully'});
        }
        else{
            return res.status(401).json({ error: 'Invalid OTP entered' });
        }
    }
    catch(error){
        throw error;
    }
}
        
       