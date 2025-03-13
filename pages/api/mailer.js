var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akutomkar@gmail.com',
    pass: 'iwwn sged yzov qbqf',
  }
});

var mailOptions = {
  from: 'akutomkar@gmail.com',
  to: 'akutomkar@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});