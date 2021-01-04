const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restorantSchema = new Schema({
    restorantname: { type: String },
    restorantAciklama: { type: String},
    restorantx: { type: String },
    restoranty: { type: String },
    restoranyildiz: { type: String },
    //restorantyorum: { type: String, required: true },
    //restorantresim: { type: String, required: true }, 
 

  }, {
    timestamps: true,
  });
const restorant = mongoose.model('restorant', restorantSchema);

module.exports = restorant;