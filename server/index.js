import express from 'express';
import bodyParser from'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.js';

const app=express();

app.use(bodyParser.json({limit:"30mb" ,extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb" ,extended:true}));
app.use(cors());
app.use('/contacts',contactRoutes);
const URLDB='mongodb+srv://Abena94:Ahmedbenayed94@cluster0.x9o8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(URLDB, {useNewUrlParser: true, useUnifiedTopology : true})
.then(()=>{app.listen(PORT, () => console.log(`server running on Port ${PORT}`))})
.catch((error) =>{console.log(error.message)});

mongoose.set('useFindAndModify',false);