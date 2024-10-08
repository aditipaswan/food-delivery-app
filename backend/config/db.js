import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aditipaswan:aditi1211@cluster0.zpw55.mongodb.net/crave-courier').then(()=>console.log("DB Connected"));
}