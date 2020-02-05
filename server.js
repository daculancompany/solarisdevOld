const express = require('express');

const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.post('/api/createContact', (req, res) => {
    const nodemailer = require('nodemailer');
    const sgMail = require('@sendgrid/mail');
    let email = 'aaron.phillips929@gmail.com'; // //niel.daculan@gmail.com , aaron.phillips929@gmail.com

    let html_template = '<!DOCTYPE html> <html> <head> <title>test html</title> <style type="text/css"> table, td, th {border: 1px solid black; } table {border-collapse: collapse; width: 100%; } td {height: 50px; vertical-align: center; } </style> </style> </head> <body> <table> <tr> <td>Name : </td> <td>'+req.body.name+'</td> </tr> <tr> <td>Email address : </td> <td>'+req.body.email+'</td> </tr> <tr> <td>Subject : </td> <td>'+req.body.subject+'</td> </tr> <tr> <td>Message : </td> <td>'+req.body.message+'</td> </tr> </table> </body> </html>';

    sgMail.setApiKey('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');
    const msg = {
        to:   email,
        from:  email,
        subject: 'Solaris DEV22',
        text: 'Solaris DEV',
        html: html_template,
    };
    sgMail.send(msg);
    res.json(200);
});


const port = 3001;

app.listen(port, () => `Server running on port ${port}`);