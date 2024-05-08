require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(cors());

const port = 3000;

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

app.use(express.json());

app.use(express.static('/var/www/dbsped.com/dbs/dbsped/dist/db-international', {
  setHeaders: (res, filePath) => {
      const ext = path.extname(filePath);
      const mimeTypes = {
          '.html': 'text/html',
          '.js': 'application/javascript',
          '.css': 'text/css',
      };
      const contentType = mimeTypes[ext];
      if (contentType) {
          res.setHeader('Content-Type', contentType);
      }
  }
}));


app.get('/en/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/db-international', 'index.html'));
});

app.get('/de/kontakt', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/db-international', 'index.html'));
});

app.get('/mk/kontakt', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/db-international', 'index.html'));
});

app.get('/bg/kontakt', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/db-international', 'index.html'));
});


app.post('/en/contact', async (req, res) => {
  console.log(`Full URL: ${req.protocol}://${req.get('host')}${req.originalUrl}`);

  try {
    const {name,email,phone,message} = req.body;

    await transporter.sendMail({
      from: `${email}`,
      to: 'gavrilovdbsped@gmail.com',
      subject: `Порака од веб страната- dbsped.com`,
      html: `<div style="font-size: 20px;">
          <div><b>Име/Име на фирмата:</b> ${name}</div>
          <div><b>Телефонски број:</b> ${phone}</div>
          <div><b>Е-маил:</b> ${email}</div>
          <div><b>Порака:</b> ${message}</div>`
    });
    res.status(200).json({ message:  'Email sent successfully'});
  } catch(error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email')
  }
});


app.post('/de/kontakt', async (req, res) => {
  try {
    const {name,email,phone,message} = req.body;

    await transporter.sendMail({
      from: `${email}`,
      to: 'gavrilovdbsped@gmail.com',
      subject: `Порака од веб страната- dbsped.com`,
      html: `<div style="font-size: 20px;">
          <div><b>Име/Име на фирмата:</b> ${name}</div>
          <div><b>Телефонски број:</b> ${phone}</div>
          <div><b>Е-маил:</b> ${email}</div>
          <div><b>Порака:</b> ${message}</div>`
    });
    res.status(200).json({ message:  'Email sent successfully'});
  } catch(error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email')
  }
});

app.post('/mk/kontakt', async (req, res) => {
  try {
    const {name,email,phone,message} = req.body;

    await transporter.sendMail({
      from: `${email}`,
      to: 'gavrilovdbsped@gmail.com',
      subject: `Порака од веб страната- dbsped.com`,
      html: `<div style="font-size: 20px;">
          <div><b>Име/Име на фирмата:</b> ${name}</div>
          <div><b>Телефонски број:</b> ${phone}</div>
          <div><b>Е-маил:</b> ${email}</div>
          <div><b>Порака:</b> ${message}</div>`
    });
    res.status(200).json({ message:  'Email sent successfully'});
  } catch(error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email')
  }
});


app.post('/bg/kontakt', async (req, res) => {
  try {
    const {name,email,phone,message} = req.body;

    await transporter.sendMail({
      from: `${email}`,
      to: 'gavrilovdbsped@gmail.com',
      subject: `Порака од веб страната- dbsped.com`,
      html: `<div style="font-size: 20px;">
          <div><b>Име/Име на фирмата:</b> ${name}</div>
          <div><b>Телефонски број:</b> ${phone}</div>
          <div><b>Е-маил:</b> ${email}</div>
          <div><b>Порака:</b> ${message}</div>`
    });
    res.status(200).json({ message:  'Email sent successfully'});
  } catch(error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email')
  }
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
