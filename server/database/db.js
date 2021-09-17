import mongoose from 'mongoose';

const Connection = async (URL) => {
    try {
        mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Error connecting: ', error.message)
    }
}

export default Connection;
