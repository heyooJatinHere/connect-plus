import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  category: String,
  date: String,
  location: String,
});

export default mongoose.model("Event", eventSchema);
