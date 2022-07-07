import cities from '../models/USCities.js'

export const getUSCities = async (req, res) => {
  const zipcode = parseInt(req.query.zipcode)

  try {
    const usCities = await cities.findOne({ zip_code: zipcode })

    return res.json(usCities)
  } catch (error) {
    res.status(200).json({ message: error.message })
  }
}
