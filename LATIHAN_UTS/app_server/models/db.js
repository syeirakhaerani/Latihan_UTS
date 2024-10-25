// models/db.js
const mongoose = require('mongoose');

// Gantilah "mongodb://localhost/latihan_uts" sesuai dengan koneksi MongoDB yang Anda gunakan
mongoose.connect('mongodb://localhost:27017/latihan_uts', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

module.exports = db;
