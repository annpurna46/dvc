import mongoose, { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your category name"],
    },
  },
  { timestamps: true }
);

// mongoose.models= {};
const category = mongoose.models.dvc_theme_categories || mongoose.model("dvc_theme_categories", categorySchema);
export default category;