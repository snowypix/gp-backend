const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//collection commentaires
const commentaireSchema = Schema({
  contenu: { type: String, required: true },
  date: { type: Date, default: Date.now },
  personneId: { type: mongoose.Schema.Types.ObjectId, ref: 'Personne', required: true },
  postId: {type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true},
  personne: { type: mongoose.Schema.Types.ObjectId, ref: 'Personne', required: true },
}, { timestamps: true });


//
const commentaireModel = mongoose.model('commentaires', commentaireSchema);

module.exports = commentaireModel;