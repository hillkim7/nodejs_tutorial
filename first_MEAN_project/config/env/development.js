/*
The express-session module will use a cookie-stored, signed identifier to identify the current user.
To sign the session identifier, it will use a secret string, which will help prevent
malicious session tampering.
*/
module.exports = {
  sessionSecret: 'developmentSessionSecret'
};

