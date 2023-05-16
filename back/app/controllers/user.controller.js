const nodemailer = require('nodemailer');
const smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'aymenhmissi2@gmail.com',
    pass: 'ijvpekakcsscmuks',
  },
});
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
exports.verfieremail = (req, res) => {
  const message = {
    from: 'aymenhmissi2@gmail.com',
    to: req.body.email,
    subject: 'DevHack ^_^',
    html: `
      <p>Name: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <p>code: ${req.body.code}</p>
      <p>lien: ${req.body.lien}</p>
    `,
  };
  
  smtpTransport.sendMail(message, (error, response) => {
    if (error) {
      res.status(500).send({ error });
    } else {
      res.status(200).send({ message: 'Email sent successfully!' });
    }
    smtpTransport.close();
  });
};
