import transporter from "../config/mail";

const sendMail = async (message: any) => {
  transporter.sendMail(message, (err: any, info: any) => {
    if (err) {
      console.log("Error occurred. " + err.message);
      return process.exit(1);
    }

    console.log("Message sent: %s", info.messageId);
  });
};

export default sendMail;
