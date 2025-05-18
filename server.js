const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// ✅ Load environment variables early
dotenv.config();

// ✅ Connect to MongoDB
connectDB();

// ✅ Initialize app
const app = express();
app.use(express.json());

// ✅ Import routes
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const addressRoutes = require("./routes/address.routes");
const cartRoutes = require("./routes/cart.routes");
const vendorRoutes = require("./routes/vendor.routes");
const vendorProductRoutes = require("./routes/vendorProduct.routes");
const orderRoutes = require("./routes/order.routes");
const ratingRoutes = require("./routes/rating.routes");
const serviceRoutes = require("./routes/service.routes");
const notificationRoutes = require("./routes/notification.routes");
const uploadRoutes = require("./routes/upload.routes"); // ✅ Cloudinary Upload

// ✅ Use routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/addresses", addressRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/vendor-products", vendorProductRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/ratings", ratingRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/upload", uploadRoutes); // ✅ Cloudinary Upload

// ✅ Root health check
app.get("/", (req, res) => res.send("Groccy backend running"));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
