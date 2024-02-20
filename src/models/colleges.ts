import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
export const College =
  mongoose.models.College ?? mongoose.model("College", schema);
