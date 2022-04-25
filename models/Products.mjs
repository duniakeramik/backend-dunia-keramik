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
  image2: {
    type: String,
  },
  penggunaan: {
    type: Array,
  },
  tag: {
    type: Array,
  },
});

export default mongoose.model("Products", Products);
