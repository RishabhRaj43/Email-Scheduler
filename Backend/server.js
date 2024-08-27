import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import cron from "node-cron";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.post("/sendEmail", (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log(name, email, subject, message);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  console.log("Transporter ");

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: `${email}`,
    subject: `${subject}`,
    text: `${message} sent by ${name} `,
  };

  console.log("Mail Options ");

  cron.schedule("0 9 * * *", () => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error occurred: ", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  });

  console.log("Cron ");

  res.send("Email sent successfully");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
