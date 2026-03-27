const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send', async (req, res) => {
  const { firstName, email, type, comment } = req.body;

  // Set up the email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'irtheophilelundengelelu@gmail.com', // Replace with your email
      pass: 'fatuma-kabwe', // Replace with your email password or app password
    },
  });

  const mailOptions = {
    from: email,
    to: 'theophilelundenge@gmail.com',
    subject: `New Contact Form Submission - ${type}`,
    text: `Name: ${firstName}\nEmail: ${email}\nMessage: ${comment}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ type: 'success', message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ type: 'error', message: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
