import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD
  }
});

export const sendPasswordEmail = async (to, password) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject: 'Your LooksNLove Password',
    html: `<p>Your password is: <b>${password}</b></p>
           <p>We recommend you change your password after logging in.</p>`
  };
  await transporter.sendMail(mailOptions);
};
