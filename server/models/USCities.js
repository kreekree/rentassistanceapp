import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  zip_code: Number,
  latitude: Number,
  longitude: Number,
  city: String,
  state: String,
  county: String,
})

const USCities = mongoose.model('ZipCodes', postSchema, 'ZipCodes')

export default USCities
