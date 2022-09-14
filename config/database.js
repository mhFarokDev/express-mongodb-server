const mongoos = require('mongoose')
const env = require('dotenv').config()

// config dotenv

let MongoDBAccessString = process.env.MONGODB_ACCESS;

const connectMongoDB = async () =>{
    
    try {
        let connect = await mongoos.connect(MongoDBAccessString)

        console.log(`MongoDB connected HOST : ${connect.connection.host} `.blue);
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectMongoDB;