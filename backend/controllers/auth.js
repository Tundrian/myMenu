const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");

// Can delete (but delete references)
exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect("/profile");
  }
  res.render("login", {
    title: "Login",
  });
};

exports.postLogin = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("errors", info);
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/profile");
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout(() => {
    // console.log('User has logged out.')
  })
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    res.redirect("/");
  });
};

exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect("/profile");
  }
  res.render("signup", {
    title: "Create Account",
  });
};

exports.postSignup = (req, res, next) => {

  // console.log(req.body)

  const validationErrors = [];

  if (!validator.isEmail(req.body.email)){
    // console.log("Please enter a valid email address.")
    validationErrors.push({ msg: "Please enter a valid email address." });
  }

  if (!validator.isLength(req.body.password, { min: 8 })){
    // console.log("Password must be at least 8 characters long")
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  }
    
  if (req.body.password !== req.body.confirmPassword){
    // console.log("Passwords do not match")
    validationErrors.push({ msg: "Passwords do not match" });
  }

  if (validationErrors.length) {
    // req.flash("errors", validationErrors);
    // console.log('validation errors: ', validationErrors)
    res.status(403).send(validationErrors);
    return
  }

  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  // console.log('Past validation')

  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  User.findOne(
    { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
    (err, existingUser) => {
      if (err) {
        // console.log('Error on finding an existing user:  ', err)
        return next(err);
      }
      if (existingUser) {
        // console.log("Account with that email address or username already exists." )
          return res.send({msg: "Account with that email address or username already exists." })
        // req.flash("errors", {
        //   msg: "Account with that email address or username already exists.",
        // });
        // return res.redirect("../signup");
        // return res.send('error 2')
      }
      user.save((err) => {
        if (err) {
          // console.log('Error on saving user: ', err)
          return next(err);
        }
        req.logIn(user, (err) => {
          if (err) {
            // console.log('Error on logging in user: ', err)
            return next(err);
          }
          // res.redirect("/profile");
          // console.log('Save complete')
          return res.status(201)
        });
      });
    }
  );
};
