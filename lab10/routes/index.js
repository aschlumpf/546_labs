const privateRoute = require("./private");
const loginRoute = require("./login");
const logoutRoute = require("./logout");
const session = require('express-session');

const constructorMethod = app => {
    app.use(session({
        name: 'AuthCookie',
        secret: 'some secret string!',
        resave: false,
        saveUninitialized: true
      }));
    app.use(async function(req, response, next) {
        const auth = (req.session.valid) ? "(Authenticated User)" : "(Non-Authenticated User)";
        const responseString = `${new Date().toUTCString()}: ${req.method} ${req.originalUrl} ${auth}`;
        console.log(responseString);
        next();
    });
    app.use("/private", privateRoute);
    app.use("/login", loginRoute);
    app.use("/logout", logoutRoute);
    app.get("/", async (req, res) => {
        if (req.session.valid) {
            res.redirect("/private");
        }
        else {
            res.render("index", {invalid: false});
        }
    });
}

module.exports = constructorMethod;