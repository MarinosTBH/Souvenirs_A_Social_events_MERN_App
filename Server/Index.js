import express from 'express' ;
import bodyParser from 'body-parser' ;
import mongoose from 'mongoose' ;
import cors from 'cors' ;
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
//Limit received files to 30mb max
app.use(bodyParser.json({limit : "30mb", extended : true})); 
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}));
app.use(cors())

app.use('/posts', postRoutes);

// DBConnection
const CONNECTION_URL = 'mongodb+srv://Souvernirsdotcom:Souvernirs.com123@cluster0.zgqcl.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT, ()=>console.log(`Server running at Port : ${PORT}`)))
.catch((error)=>console.log(error.message))


// useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false.
// , 
// mongoose.set('useFindAndModify', false);