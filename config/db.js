const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://rajnish1999:rajatiwarihrt@democluster.ldbei.mongodb.net/store_locator?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useCreateIndex : true,
            useFindAndModify : false,
            useUnifiedTopology : true
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB