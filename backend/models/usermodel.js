import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, 'First name must be at least 3 characters']
    },
    lastname: {
      type: String,
      required: true,
      minlength: [3, 'Last name must be at least 3 characters']
    }
  },
  email: {
    type: String,
    required: true,
    minlength: [3, 'Email must be at least 3 characters']
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters']
  },
  soclerid: {
    type: String,
    default: null
  }
});


userSchema.methods.getAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });
};


userSchema.methods.hashPassword = async function () {
  const saltRounds = 10;
  return await bcrypt.hash(this.password, saltRounds);
};

const User = mongoose.model("User", userSchema);
export default User;