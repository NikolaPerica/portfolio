"use strict";
const nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
var express    = require('express');
const app = express();
// async..await is not allowed in global scope, must use a wrapper
async function send(body){


  // Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/', function(request, response){
    var sub = (request.body.subject);
    console.log(request.body.user.email);
});
  
  

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

  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"sender" <nperica.send@hotmail.com>', // sender address
    to: "nikolaperica93@gmail.com", // list of receivers
    subject: sub,
    message: msge + " \n " + "Sent from "+ eml+"by "+ nam 
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

send().catch(console.error);


module.exports = send;

