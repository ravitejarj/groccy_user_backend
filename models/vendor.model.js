const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true },
    phone: { type: String },
    storeType: { type: String, required: true }, // grocery, restaurant, doctor, club, etc.
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
    image: { type: String }, // logo or store image
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vendor", vendorSchema);
