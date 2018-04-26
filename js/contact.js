// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const nodemailer = require("nodemailer");

// const app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(express.static(path.join(__dirname, 'public')));

// // Getting elements
// const nameInput = document.querySelector("#input-name").value;
// const emailInput = document.querySelector("#input-email").value;
// const messageInput = document.querySelector("#input-message").value;

// app.post('submit', (req, res) => {
//     const transporter = nodemailer.createTransport({
//         service: 'hotmail',
//         auth: {
//             user: 'daryankf@outlook.dk',
//             pass: 'daryan4422',
//         }
//     });
//     let mailOptions = {
//         from: `${nameInput} <${emailInput}>`,
//         to: 'daryankamalifar@gmail.com',
//         subject: 'Website submisson',
//         text: 'you have a submission with the follwing details... Name: ' +req.body.name+'Email: '+req.body.email+ 'Message: '+req.body.message,
//         html: '<p>you have a submission with the follwing details...</p> <ul><li>Name:'+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
//     }
//     transporter.sendMail(mailOptions, (error, info)=> { 
//         if(error) {
//             console.log(error);
//             res.redirect('/');
//         }else {
//             console.log('Message Sent: ' +info.response);
//             res.redirect('/');
//         }
//     })

// })



// app.listen(3000);
// console.log("Server is running on port 3000");