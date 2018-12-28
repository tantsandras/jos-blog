const express = require("express");
const getData = require("../model/getData");

const router = express.Router();

// home route
router.get("/", (req, res) => {
  res.render("home"); // . 
});

// create profile route
router.get("/write", (req, res) => {
  res.render("write"); 
});

router.get("/login", (req, res) => {
    res.render("login"); 
  });
  

// // search profiles route
// router.get("/search-profiles", (req, res) => {
//   getData.getUserData((err, userData) => {
//     if (err) {
//       res.statusCode = 500;
//       res.send("Error");
//     }
//     res.render("search-profiles", { users: userData } )
//   })
// })




// error pages
router.use(function(req, res, next){
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
