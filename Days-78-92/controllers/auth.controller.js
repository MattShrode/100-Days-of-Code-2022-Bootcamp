const User = require("../models/user.model");
const authUtil = require('../util/authentication');

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

async function login(req, res) {
  const user = new User(req.body.email, req.body.password);
  const existingUser = await user.getUserWithSameEmail();

  if(!existingUser) {
    res.redirect('/login');
    return;
  }

  const passwordisCorrect = await user.comparePassword(existingUser.password);

  if(!passwordisCorrect) {
    res.redirect('/login');
    return;
  }

  authUtil.createUserSession(req, existingUser, function() {
    res.redirect('/');
  });
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup,
  login: login,
};
