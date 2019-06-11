"use strict";
const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function send(body){

  
const mail = {

  from: '"sender" <nperica.send@hotmail.com>', // sender address
  to: "nikolaperica93@gmail.com", // list of receivers
  subject: `${body.subj}`,
  message: `Poruka ${body.msg}` + " \n " + `Sent from ${body.email} by ${body.name}` 
}


console.log(mail)

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'hotmail', 
    host: "smtp-mail.outlook.com",
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'nperica.send@hotmail.com', // generated ethereal user
      pass: 'nikola1234' // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });


  

    await transporter.sendMail({
      from: process.env.USER_MAIL, 
      to: mail.to,
      subject: mail.subject, 
      text: mail.message,
      html: `<b>${mail.message}</b>` 
    });


}

send().catch(console.error);


module.exports = send;

