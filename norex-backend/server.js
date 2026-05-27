// ==========================================
// 1. IMPORTS
// ==========================================
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import your product routes here at the top
const productRoutes = require("./routes/productRoutes"); 

const app = express();

// ==========================================
// 2. MIDDLEWARE (Here is the middleware!)
// ==========================================
// cors() allows your React frontend to talk to your Node backend
app.use(cors()); 

// express.json() translates incoming request data into readable JSON
app.use(express.json()); 


// ==========================================
// 3. DATABASE CONNECTION
// ==========================================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


// ==========================================
// 4. ROUTES (Below the middleware)
// ==========================================
// Basic test route to see if the server is running
app.get("/", (req, res) => {
  res.send("Norex Backend Running");
});

// Your new product routes! 
// Any request starting with "/api/products" will be sent to your productRoutes file
app.use("/api/products", productRoutes); 


// ==========================================
// 5. START THE SERVER
// ==========================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//Fix CORS
const cors = require("cors");

app.use(cors({
  origin: "https://norexfashion.com"
}));