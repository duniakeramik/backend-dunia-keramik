import mongoose from "mongoose";

const Products = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  brand: {
    type: String,
  },
  ukuran: {
    type: String,
  },
  kategori: {
    type: String,
  },
  tekstur: {
    type: String,
  },
  isPromo: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
  },
});

export default mongoose.model("Products", Products);
