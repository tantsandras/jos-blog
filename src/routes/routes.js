const express = require("express");
const getData = require("../model/getData");
const request = require('request');
const { sign, verify } = require('jsonwebtoken');
const igToken = process.env.IGTOKEN;
const router = express.Router();

const url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + `${igToken}`;

const apiRes = cb => {
  request(url, { json: true }, (err, res, body) => {
  if (err) { 
    return cb(err);
  } else {
      let list = [];
      body.data.forEach(images => {
          list.push(images);
      });
      let instaData = list.map(post => {
        return {
          thumbnail : post.images.thumbnail.url,
          };
       });
       return cb(null, instaData);
      }

  });
}

// home route
router.get("/", (req, res) => {
  getData.getBpData((err, bpData) => {
    if (err) {
      res.statusCode = 500;
      res.send("Error");
    }
    apiRes((err, instaData) => {
      if (err) {
        res.statusCode = 500;
        res.send("Error");
      }
  res.render("home", {blogposts: bpData, insta: instaData}); 
    });
  });
});

router.get('/bps', (req, res) => {
  getData.getBpData((err, bpData) => {
    if (err) {
      res.statusCode = 500;
      res.send("Error");
    }
    res.json(bpData)
  });
});


router.get("/posts/:id", (req, res) => {
  res.render("posts")
});

 router.get("/write", (req, res) => {
   if (req.cookies['cookie']) {
    res.render("write")
   } else {
    res.redirect('/login');
   }
 });

router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

router.get("/login", (req, res) => {
    res.render("login"); 
  });

router.get("/logout", (req, res) => {
  getData.getBpData((err, bpData) => {
    if (err) {
      res.statusCode = 500;
      res.send("Error");
    }
  res.clearCookie("cookie");
  res.redirect("/")
  });
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
