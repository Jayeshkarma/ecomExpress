const mongoose = require("mongoose");

const product_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "price must be a number"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    required: true,
    enum: {
      values: ["apple", "samsung", "dell", "mi"],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model("Product", product_schema);
