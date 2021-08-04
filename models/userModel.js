const mongoose = require("mongoose")

// const {Schema} = mongoose
// or 
const Schema = mongoose.Schema

const userSchema = new Schema({ 
    firstName: String,
    lastName: String,
    email: String,
    password: String 
  });


// const User = [
//   {
//     id: "1",
//     firstName: "Ableman",
//     lastName: "Clareth",
//     email: "seelbag@gmail.com",
//     password: "ask123",
//   },
// ];

const User = mongoose.model("User", userSchema);


module.exports = User;
