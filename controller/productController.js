const Product = require("../models/userModel");

exports.createProduct = async () => {
    const { name, desc} = req.body;
    try {
        if ((!name, !desc)){
            res.json({status: "failed", message: "All fields are needed"})
        }
        name.trim()
    }






} catch(error)