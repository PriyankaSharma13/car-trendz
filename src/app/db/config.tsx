import mongoose from "mongoose";

const URL ="mongodb+srv://officialpriyanka013:f8p6Oo3mRntXwkRZ@cluster0.3kbp1r8.mongodb.net/car-trendz";
const connectDB = async () => {
  try {
    await mongoose.connect(URL,{
        // useNewUrlParser: true, 
        // useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;

    