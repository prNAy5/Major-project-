

const express = require('express');
const mongoose = require('mongoose');


const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI; // MongoDB connection string

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

const UserSchema = new mongoose.Schema({
    name: String,
    mobileNumber: Number,
    panCard: String,
    email:String,
    vehicleRegNumber:String,
    chassis:String,
    slotDate:String,
    slotTime:String,
});

const User = mongoose.model('User', UserSchema);

// User Registration
app.post('/register', async (req, res) => {
    const { name, mobileNumber, panCard, email, vehicleRegNumber, chassis, slotDate, slotTime } = req.body;
    
    const newUser = new User({name, mobileNumber, panCard, email, vehicleRegNumber, chassis, slotDate, slotTime });
    await newUser.save();
    res.status(201).send('User registered');
});



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
