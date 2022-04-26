const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.get('/send-email', async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'sarai.emmerich33@ethereal.email',
      pass: 'ETnbrpJKevP37ybqah'
    }
  });

  const emailMessage = {
    from: '"John Doe 👻" <johndoe@example.com>',
    to: "user1@example.com, user2@example.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  }

  let email = await transporter.sendMail(emailMessage);

  console.log("Message sent: %s", email.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(email));

  return res.status(200).json({
    error: false,
    message: 'E-mail successfully sent!'
  });
});

app.listen(3001, () => {
  console.log('Server is running at http://localhost:3001');
});