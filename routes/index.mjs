import express from "express";
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

const router = express.Router();

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

export default router;
