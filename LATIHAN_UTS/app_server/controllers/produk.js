const produk = require("../models/produk");

// controllers/produkController.js
const produk = await produk.findById(req.params.id);

// GET: Tampilkan semua produk
exports.getAllProduk = async (req, res) => {
  try {
    const produk = await Produk.find();
    res.json(produk);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST: Tambah produk baru
exports.createProduk = async (req, res) => {
  const produk = new Produk({
    nama: req.body.nama,
    deskripsi: req.body.deskripsi,
    harga: req.body.harga,
    stok: req.body.stok,
    kategori_id: req.body.kategori_id
  });

  try {
    const newProduk = await produk.save();
    res.status(201).json(newProduk);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Implementasi untuk update dan delete juga bisa ditambahkan di sini
