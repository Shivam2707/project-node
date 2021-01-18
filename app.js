const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/login', function (req, res) {
    console.log("request", req.body);
    const email = req.body.email;
    const password = req.body.password;
    const e = await userModel.findOne({ email: email });
    console.log(e);
    if (e) {
        if (e.password === password) {
            res.send("Login successful");
        }
        else {
            res.send("Email or Password is incorrect");
        }
    }
});
app.listen(3000);
console.log('Server is listening at port 3000');