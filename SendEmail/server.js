const express = require('express');
const nodeMailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.user,
        pass: process.env.pass
    }
});

const mailOptions = {
    from: '',
    to: process.env.recipents,
    subject: '',
    text: ''
};

app.post('/send-email', async (req, res) => {
    
    const { name, email, subject, message } = req.body;
    mailOptions.from = process.env.user;
    mailOptions.to = process.env.user;
    // mailOptions.to = process.env.recipents;
    mailOptions.subject = subject;
    mailOptions.text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;



    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).send('An error occurred. Please try again later.');
        } else {
            res.status(200).send('Message sent successfully!');
        }
    });
});

app.listen(8080, (err) => {
    if (err) {
        console.error('Error:', err);
    }
    else {
        console.log('Server running on http://localhost:8080');
    }
});