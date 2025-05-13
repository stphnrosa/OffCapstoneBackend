import {config} from 'dotenv'; config(); //invoking this immediately to use the environment variables
import mongoose from 'mongoose';

// using mongoose is what allows us to connect to our DB in mongoDB
mongoose.connect(process.env.MONGO_URI) // Process.env.MONGO_URI is being passed as the argument in this. This variable holds the mongoose connection string

//Once this connection is open, we will execute this callback function. thi CB function is going to say "Connected to Database"
mongoose.connection.once('open', () => {
    console.log(`conncted to Database: ${mongoose.connection.name}`);
});