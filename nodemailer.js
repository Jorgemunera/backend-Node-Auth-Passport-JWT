
const nodemailer = require("nodemailer");

async function sendMail() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
        user: 'gerjo9211@gmail.com',
        pass: 'xmrmmgqahcpzzwpt'
    }
  });

  let info = await transporter.sendMail({
    from: 'gerjo9211@gmail.com',
    to: "gerjo9211@hotmail.com",
    subject: "HOLA PAPU",
    text: "Hola papu, lo vas a lograr, solo confia 😁",
    html: "<b>Hola papu, lo vas a lograr, solo confia 😁</b>",
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}

sendMail()
