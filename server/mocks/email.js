/*jshint node:true*/

module.exports = function(app) {
    var express = require('express');
    var emailRouter = express.Router();
    var nodemailer = require('nodemailer');
    //Replace the username and password below to connect to GMail SMTP.
    var transporter = nodemailer.createTransport('smtps://<<put your username here >>%40gmail.com:<<put your password here>>@smtp.gmail.com');


    emailRouter.get('/', function(req, res) {
        res.send({
            'email': []
        });
    });

    emailRouter.post('/', function(req, res) {

        console.log('Sending email');
        
        console.log(req.body);



        var mailOptions = {
            from: 'Ember Emailer 👥 <replace your gmail address here>', // sender address
            to: req.body.to, // list of receivers
            subject: req.body.subject + ' ✔', // Subject line
            text: req.body.body + '🐴', // plaintext body
            
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
        res.status(201).end();
    });

    emailRouter.get('/:id', function(req, res) {
        res.send({
            'email': {
                id: req.params.id
            }
        });
    });

    emailRouter.put('/:id', function(req, res) {
        res.send({
            'email': {
                id: req.params.id
            }
        });
    });

    emailRouter.delete('/:id', function(req, res) {
        res.status(204).end();
    });

    // The POST and PUT call will not contain a request body
    // because the body-parser is not included by default.
    // To use req.body, run:

    //    npm install --save-dev body-parser

    // After installing, you need to `use` the body-parser for
    // this mock uncommenting the following line:
    //
    app.use('/api/email', require('body-parser').urlencoded({ extended: false }));
    app.use('/api/email', emailRouter);
};
