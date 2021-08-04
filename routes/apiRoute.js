const db = require('../models');
var passport = require("../config/passport");

module.exports = (app) => {
    app.post("/api/newUser", (req, res) => {
        db.User.create({
            userName: req.body.userName,
            password: req.body.password
        }).then(dbUser => {
            res.json(dbUser)
            console.log("new user: ", dbUser)
        })
    })

    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json("/landing");
      });

     app.get("/api/user_data", function(req, res) {
        if (!req.user) {
        res.json({message:"log in first"});
        } else {console.log("hello there", req.user)
            res.json({
            userName: req.user.userName,
            });
        }
    }); 

    app.get("/api/getAllUsers", function(req, res) {
        if (!req.user) {
            res.json({message:"not authorized"})
        } else {
        db.User.findAll({
            attributes: ["userName"]
        }).then(function(dbUser) {
            res.json(dbUser)
        })
    }
    })

    app.get("/logOut", function(req,res) {
        req.logout();
        res.redirect("/")
    })

}