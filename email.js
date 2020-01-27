const sendmail = require('sendmail')();

sendmail({
  from: 'christina.hastenrath@getpostman.com',
  to: 'christina.hastenrath@getpostman.com',
  subject: 'test sendmail',
  attachments: [
    {
      path: './email.txt',
    },
  ],
}, (err, reply) => {
  console.log('sendmail nodejs error', err && err.stack);
  console.dir(reply);
});

// const nodemailer = require('nodemailer');

// const transport = nodemailer.createTransport({
//   host: 'smtp-relay.gmail.com',
//   port: 25,
//   // auth: {
//   //   user: 'put_your_username_here',
//   //   pass: 'put_your_password_here',
//   // },
// });

// const message = {
//   from: 'christina.hastenrath@getpostman.com', // Sender address
//   to: 'christina.hastenrath@postman.com', // List of recipients
//   subject: 'Design Your Model S | Tesla', // Subject line
//   text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
// };
// transport.sendMail(message, (err, info) => {
//   if (err) {
//     console.log('error sending email', err);
//   } else {
//     console.log('info sending email', info);
//   }
// });
