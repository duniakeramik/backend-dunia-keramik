import Products from "../models/Products.mjs";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addProducts = async (req, res) => {
  const product = new Products(req.body);
  try {
    await product.save();
    res.status(201).json({
      message: "product added",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    await Products.updateOne({ _id: req.params.id }, req.body);
    res.status(201).json({
      message: "product updated",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "product not found",
      });
    } else {
      await Products.findByIdAndDelete(req.params.id);
      res.status(201).json({
        message: "product removed",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// filter product

export const getProductByCategory = async (req, res) => {
  try {
    const product = await Products.find({ kategori: req.params.kategori });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProductByBrand = async (req, res) => {
  try {
    const product = await Products.find({ brand: req.params.brand });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProductByTekstur = async (req, res) => {
  try {
    const product = await Products.find({ tekstur: req.params.tekstur });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProductByUkuran = async (req, res) => {
  try {
    const product = await Products.find({ ukuran: req.params.ukuran });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
