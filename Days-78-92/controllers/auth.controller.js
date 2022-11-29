const User = require("../models/user.model");

function getSignup(req, res) {
  res.render("customer/auth/signup");
}

async function signup(req, res) {
  const user = new User(
    req.body.email,
    req.body.password,
    req.body['full-name'],
    req.body.street,
    req.body.city,
    req.body.state,
    req.body.postal,
  );

  await user.signup();

  res.redirect('/login');
}

function getLogin(req, res) {
  res.render('customer/auth/login');
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup,
};
