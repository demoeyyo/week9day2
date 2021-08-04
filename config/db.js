const mongoose = require('mongoose');

async function dbConfig() {
    try {
        
        await mongoose.connect(process.env.MONGO_DB, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConfig