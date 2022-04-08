import mongoose from "mongoose";

const Products = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
});

export default mongoose.model("Products", Products);
