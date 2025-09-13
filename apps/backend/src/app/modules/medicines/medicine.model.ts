import mongoose, { Schema, Document } from "mongoose";

export interface IMedicine extends Document {
  name: string;
  genericName: string;
  strength: string;
  manufacturer: string;
  brand: string;
  category: string;
  batchNumber: string;
  expiryDate: Date | null;
  mrp: number;
  quantity: number;
}

const MedicineSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    genericName: { type: String, required: true },
    strength: { type: String, required: true },
    manufacturer: { type: String, required: true },
    brand: { type: String },
    category: { type: String },
    batchNumber: { type: String, default: "" },
    expiryDate: { type: Date, default: null },
    mrp: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const MedicineModel = mongoose.model<IMedicine>("Medicine", MedicineSchema);
