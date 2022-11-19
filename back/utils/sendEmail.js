const nodemailer = require("nodemailer")

const sendEmail = async options => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "656b59c76d2115",
            pass: "552cec97737fd1"
        }
    });

    const mensaje = {
        from: "Liqueurs Styles <noreply@LiqueursStyles.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports = sendEmail;