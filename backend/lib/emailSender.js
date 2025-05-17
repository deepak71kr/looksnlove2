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

export const sendPasswordEmail = async (email, resetToken) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Password Reset Request',
    html: `<p>Click this link to reset your password: <a href="http://localhost:3000/reset-password/${resetToken}">Reset Password</a></p>`
  };

  await transporter.sendMail(mailOptions);
};
