const User = require("../models/user.model");
const authUtil = require('../util/authentication');

function getSignup(req, res) {
  res.render("customer/auth/signup");
}

async function signup(req, res, next) {
  const user = new User(
    req.body.email,
    req.body.password,
    req.body['full-name'],
    req.body.street,
    req.body.city,
    req.body.state,
    req.body.postal,
  );
    try {
      await user.signup();
    } catch (error) {
      return next(error);
    }
  

  res.redirect('/login');
}

function getLogin(req, res) {
  res.render('customer/auth/login');
}

async function login(req, res, next) {
  const user = new User(req.body.email, req.body.password);
  let existingUser;
  
  try {
    existingUser = await user.getUserWithSameEmail();
  } catch (error) {
    return next(error);
  }
  

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

function logout(req, res) {
  authUtil.destroyUserAuthSession(req);
  res.redirect('/login');
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup,
  login: login,
  logout: logout,
};
