function isEmpty(value) {
  return !value || value.trim() === "";
}

function userCredentialsAreValid(email, password) {
  return (
    email && email.includes("@") && password && password.trim().length >= 6
  );
}

function userDetailsAreValid(
  email,
  password,
  name,
  street,
  city,
  state,
  postal
) {
  return (
    userCredentialsAreValid(email, password) &&
    !isEmpty(name) &&
    !isEmpty(street) &&
    !isEmpty(city) &&
    !isEmpty(state) &&
    !isEmpty(postal)
  );
}

function emailIsConfirmed(email, confirmEmail) {
    return email === confirmEmail;
}

module.exports = {
    userDetailsAreValid: userDetailsAreValid,
    emailIsConfirmed: emailIsConfirmed,
}