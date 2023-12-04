import mongoose, { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [6, "Your password must be longer than 6 characters"],
      select: false,
    },
    mobile: {
      type: String,
    },
    profilepic: {
      public_id: String,
      url: String,
    },
    country: {
      type: String,
    },
    address: {
      type: String,
    },
    location: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    this_is_user: {
      type: String,
      enum: ["0", "1"],
      default: "1",
    },
    this_is_admin: {
      type: String,
      enum: ["0", "1"],
      default: "0",
    },
    this_is_super: {
      type: String,
      enum: ["0", "1"],
      default: "0",
    },
    active: {
      type: String,
      enum: ["0", "1"],
      default: "1",
    },
    amount: {
      type: String,
      default: "0",
    },
    validity: {
      type: String,
    },
    email_verified_at: {
      type: String,
      enum: ["no", "yes"],
      default: "no",
    },
    alternatephone: {
      type: String,
    },
    paytm_no: {
      type: String,
    },
    upi_no: {
      type: String,
    },
    dob: {
      type: String,
    },
    url: {
      type: String,
    },
    remember_token: {
      type: String,
    },
    termandconditions: {
      type: String,
    },
  },
  { timestamps: true }
);

// mongoose.models= {};
const Users = mongoose.models.Users || mongoose.model("Users", usersSchema);
export default Users;