const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

const connectDB = async () => { console.log (process.env.MONGO_URI)
    try {
        await mongoose.connect('mongodb+srv://arindamasn10:Arindam1504@cluster0.fjrkhp8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
