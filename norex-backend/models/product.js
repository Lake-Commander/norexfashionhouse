const mongoose = require("mongoose");
// Define the Product schema
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