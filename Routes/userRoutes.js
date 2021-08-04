const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

router.post("/signup", async function (req, res) {
    // console.log(req.body)
    // res.send(req.body)
// res.send("click here to register")
    let {firstName, lastName, email, password} = req.body

    const checkEmail = await User.findOne({email});
    if (checkEmail){
        return res.json({
            status: "failed",
            message: "Email already exist",
        });
    }
    
    // password = await  bcrypt.hash(password, 12);

    const newUser = {firstName, lastName, email, password};

    const createUser = await User.create(newUser);
res.status(201).json({
    status: "successful",
    data: {
        id: createUser._id,
        firstName: createUser.firstName,
        lastName: createUser.lastName,
        email: createUser.email, 
}
})
})

// FirstName:
// LastName: 
// Email:
// Password:


module.exports=router