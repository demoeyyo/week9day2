const express = require("express");
const router = express.Router();

router.post("/signup", function (req, res) {
    console.log(req.body)
    res.send(req.body)

    // res.send("click here to register")
})

// FirstName:
// LastName: 
// Email:
// PhoneNumber:
// DOB:
// Address:


module.exports=router