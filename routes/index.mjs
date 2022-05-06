import express from "express";
import { createMitra, deleteMitra, getMitra, getMitraById, updateMitra } from "../controllers/Mitra.mjs";
import {
  addProducts,
  deleteProduct,
  getProductByBrand,
  getProductByCategory,
  getProductById,
  getProductByTekstur,
  getProductByUkuran,
  getProducts,
  updateProduct,
} from "../controllers/Products.mjs";
import { createWeb } from "../functions/webMitra.mjs";

const router = express.Router();

// products
router.get("/api/products", getProducts);
router.get("/api/product/:id", getProductById);
router.post("/api/product", addProducts);
router.patch("/api/product/:id", updateProduct);
router.delete("/api/product/:id", deleteProduct);
// filter
router.get("/api/products/brand/:brand", getProductByBrand);
router.get("/api/products/ukuran/:ukuran", getProductByUkuran);
router.get("/api/products/tekstur/:tekstur", getProductByTekstur);
router.get("/api/products/kategori/:kategori", getProductByCategory);
// build web
router.post('/api/build/site', createWeb)
// mitra
router.get("/api/mitra", getMitra);
router.get("/api/mitra/:id", getMitraById);
router.post("/api/mitra", createMitra);
router.patch("/api/mitra/:id", updateMitra);
router.delete("/api/mitra/:id", deleteMitra);

export default router;
