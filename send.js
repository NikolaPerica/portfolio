"use strict";
const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function send(body){
var sub, msge, eml, nam;

  // Parse URL-encoded bodies (as sent by HTML forms)
//app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
//app.use(express.json());

// Access the parse results as request.body
//app.post('/', function(request, response){
 //   sub = body.subject;
 //   msge = body.message;
 //   eml = body.email;
  //  nam =body.name;
    
//});

  
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
//console.log(sub);
  
  // send mail with defined transport object
 // let info = await transporter.sendMail({
 //   from: '"sender" <nperica.send@hotmail.com>', // sender address
 //   to: "nikolaperica93@gmail.com", // list of receivers
 //   subject: sub,
 //   message: body.message + " \n " + `Sent from ${body.email} by ${body.name}` 
    
  //});

  

    await transporter.sendMail({
      from: process.env.USER_MAIL, 
      to: mail.to,
      subject: mail.subject, 
      text: mail.message,
      html: `<b>${mail.message}</b>` 
    });


  //console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

send().catch(console.error);


module.exports = send;

