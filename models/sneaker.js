import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
}, {
  timestamps: true
})

const sneakerSchema = new Schema({
  brand: String,
  nickname: String,
  releaseYear: Date,
  sku: String,
  pairs: Number,
  size: Number,
  purchasePrice: Number,
  marketplace: {type: Schema.Types.ObjectId, ref: "Marketplace"},
  owner: {type: Schema.Types.ObjectId, ref: "profile"},
  comments: [commentSchema],
}, {
  timestamps: true,
})

const Sneaker = mongoose.model('Sneaker', sneakerSchema)

export {
  Sneaker
}