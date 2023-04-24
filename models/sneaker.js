import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  author: { type: Schema.Types.ObjectId, ref: "Profile" },
}, {
  timestamps: true
})

const saleSheetSchema = new Schema({
  condition: String,
  salePrice: Number,
})

const sneakerSchema = new Schema({
  imageUrl: String,
  brand: {
    type: String,
    enum: ['Adidas', 'Converse', 'Jordan', 'New_Balance', 'Nike', 'Reebok', 'Vans', 'Yeezy'],
    default: 'Nike',
  },
  nickname: String,
  releaseYear: Number,
  sku: String,
  pairs: Number,
  size: Number,
  purchasePrice: Number,
  comments: [commentSchema],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  isForSale: Boolean,
  saleSheets: [saleSheetSchema],
}, {
  timestamps: true,
})

const Sneaker = mongoose.model('Sneaker', sneakerSchema)

export {
  Sneaker
}