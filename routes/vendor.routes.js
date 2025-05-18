const express = require("express");
const router = express.Router();
const {
  createVendor,
  getVendors,
  getVendorById,
  updateVendor,
  deleteVendor
} = require("../controllers/vendor.controller");
const verifyToken = require("../middleware/authMiddleware");

// Public or protected depending on your choice
router.post("/", verifyToken, createVendor);
router.get("/", getVendors);
router.get("/:id", getVendorById);
router.put("/:id", verifyToken, updateVendor);
router.delete("/:id", verifyToken, deleteVendor);

module.exports = router;
