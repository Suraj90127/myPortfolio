import mongoose from "mongoose";

mongoose.set('strictQuery', true);
export const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
    .then((c) => {
        console.log(`Mongodb connection to: ${c.connection.host}`);
    })
    .catch((err) => {
        console.log(`Error ${err}`);
    })
}