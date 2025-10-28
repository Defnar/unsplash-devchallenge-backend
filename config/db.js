import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() => console.log("Database successfully connected"))
  .catch((err) => console.error(err));

export default mongoose.connection;
