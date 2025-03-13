import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: {type:String , required:true},
  expiresAt: { type: Date, default: () => new Date(Date.now() + 60 * 1000), expires: 0 } }
);

// const User = mongoose.model('User', userSchema);
export default mongoose.models.OTP || mongoose.model('OTP', otpSchema);