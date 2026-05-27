const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    images: [String],
    category: String,
    sizes: [String],
    colors: [String],
    inStock: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);