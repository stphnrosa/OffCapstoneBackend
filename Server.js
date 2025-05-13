import { config } from 'dotenv'; config();
import express from 'express'; // added to package.json "type":"module", to allow import express instead of const express.Can't use import/export unless you do this.
import cors from 'cors'; // cors is used to have communication between Backend and Frontend
import router  from './Routes/BlogRoute';
import './Database/Database'

//const declared the variable "app". we placed () to invoke express after importing it on line 2
const app = express();
const PORT= process.env.PORT || 3000; // user could still run the server with this port, 

//Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json());
app.use(cors());
app.use('/blog', router);


app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`) //Back ticks are used for embedding a variable into a string(string interpolation). In this case ${PORT}, is embedded.
})