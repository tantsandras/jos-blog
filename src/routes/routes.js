const express = require("express");
const getData = require("../model/getData");

const router = express.Router();

// home route
router.get("/", (req, res) => {
  getData.getBpData((err, bpData) => {
    if (err) {
      res.statusCode = 500;
      res.send("Error");
    }
  res.render("home", {blogposts: bpData} ); 
  });
});


router.get("/write", (req, res) => {
    res.render("write")
});

router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

router.get("/login", (req, res) => {
    res.render("login"); 
  });

// error pages
router.use( (req, res, next) => {
  res.status(404);

  if (req.accepts('html')) {
    res.render("404");
    return;
  }

  if (req.accepts('json')) {
    res.render("500");
    return;
  }

  res.type('txt').send('Not found');
});


module.exports = router;
