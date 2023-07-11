const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      require: [true, "first name is required"],
    },
    phone: {
      type: String,
      required: [true, "phone no is required"],
    },
    age: {
      type: String,
      required: [true, "age is required"],
    },
    birth: {
      type: String,
      required: [true, "birth is required"],
    },
    registration: {
      type: Number,
      required: [true, "registration no is required"],
    },
    sex: {
      type: String,
      required: [true, "sex is required"],
    },
    from: {
      type: String,
      required: [true, "from is required"],
    },
    to: {
      type: String,
      required: [true, "to is required"],
    },
    caste: {
      type: String,
      required: [true, "caste is required"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    seasonticketNo: {
      type: Number,
    },
    reason: {
      type: String,
      required: [true, "reason is required"],
    },
    timings: {
      type: Object,
      required: [true, "work timing is required"],
    },
  },
  { timestamps: true }
);
const dataModel = mongoose.model("users", dataSchema);
module.exports = dataSchema;
