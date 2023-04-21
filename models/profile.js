import mongoose from 'mongoose'

const Schema = mongoose.Schema

const headlineSchema = new Schema({
  content: String
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  headlines: [headlineSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}

