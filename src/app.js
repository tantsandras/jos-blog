const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const helpers = require("./views/helpers/index");
const postData = require("./model/postData.js");
const getData = require("./model/getData");
const bcrypt = require("bcryptjs")

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main",
    helpers: helpers
  })
);

// load public folder
app.use(
  express.static(path.join(__dirname, "..", "/public"), { maxAge: "30d" })
);

app.use(bodyParser.json());

// parse urlencoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "public")));


app.post("/write", (req, res) => {
postData.postDataBp(
  req.body.header,
  req.body.img_url,
  req.body.text
   );
  res.redirect("/write");
});


app.post("/sign-up", (req, res) => {
  let name = req.body.name;
  let password = req.body.password;
  console.log(name);

  getData.promiseItsJo(name)
      .then((result) => {
        console.log("promise result:", result);
        if(result.length === 0) {
          postData.postDataUser(name, password, (err, result2) => {
            if (err) {
              console.log(err);
            } else {
      console.log("added jo to the database ja", result2)
        res.redirect("/login");
          }
        })
      }
    })
      .catch((err)=> {
        console.log("promise error", err);
      
    })
  })


app.post("/login", (req, res) => {
  let name = req.body.name;
  let enteredPassword = req.body.password; 

  getData.promiseItsJo(name) 
    .then((result) => {
      console.log('this is what were getting', result[0].password)
      bcrypt.compare(enteredPassword, result[0].password, (err, response) => {
        if (response) {
            res.redirect("/write");
        } else {
          console.log("try again sugarplum")
          res.redirect("/login");
        }
      })
    })    
    .catch((err)=> {
      console.log("promise error", err);
    })
  });

app.set("port", process.env.PORT || 1991);
app.use(routes);

module.exports = app;
