import { Schema, model } from "mongoose";

export interface Product {
  title: string;
  price: number;
  tag: string;
  image: string;
  id: number;
  sku: string;
  datecreated: Date;
}

export const productschema = new Schema<Product>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  tag: { type: String, required: true },
  image: { type: String, required: true },
  id: { type: Number, required: false, unique: true },
  sku: { type: String, required: true, unique: true },
  datecreated: { type: Date, default: new Date(), required: true },
});

export const ProductModel = model<Product>("Product", productschema);
