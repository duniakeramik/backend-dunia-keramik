import Mitra from "../models/Mitra.mjs";

export const getMitra = async (req, res) => {
  try {
    const mitra = await Mitra.find();
    res.status(200).json(mitra);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMitraById = async (req, res) => {
  try {
    const mitra = await Mitra.findById(req.params.id);
    res.status(200).json(mitra);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMitra = async (req, res) => {
  const mitra = new Mitra(req.body);
  try {
    await mitra.save();
    res.status(201).json({
      message: "Mitra berhasil ditambahkan",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMitra = async (req, res) => {
  try {
    await Mitra.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      message: "Mitra berhasil diperbarui",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMitra = async (req, res) => {
  try {
    await Mitra.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Mitra berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
