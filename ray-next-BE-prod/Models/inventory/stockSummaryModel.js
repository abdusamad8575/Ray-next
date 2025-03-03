const mongoose = require("mongoose");

const stockSummarySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        warehouseCode: { type: String, required: true, unique: true },
        location: { type: String, required: true },
        isVerify: { type: Boolean, default: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("StockSummary", stockSummarySchema);
