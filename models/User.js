const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    __v: { type: Number, select: false },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: String,
        default: "Employee",
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: 0,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
