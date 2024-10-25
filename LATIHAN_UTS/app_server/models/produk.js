// models/Produk.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const produkSchema = new Schema({
  nama: {
    type: String,
    required: true
  },
  deskripsi: {
    type: String,
    required: true
  },
  harga: {
    type: Number,
    required: true
  },
  stok: {
    type: Number,
    required: true
  },
  kategori_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = mongoose.model('Produk', produkSchema);

