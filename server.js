const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

app.post("/api/subscribe", (req, res) => {
  const { name, email } = req.body;
  console.log("name", name);
  console.log("email", email);
  console.log(validateEmail(email))

  if(!name){
    res.send("Please enter valid name.");
  } else {
    if(validateEmail(email)) {
      res.send("Thanks for subscribing, " + name + "!");
    } else {
      res.send("Please enter valid email.");
    }
  }
}); 

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
