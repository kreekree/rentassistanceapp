import cities from '../models/USCities.js'

export const updateState = async (req, res) => {
  try {
    const replacement = await cities.updateMany(
      { state: 'WY' },
      { $set: { state: 'Wyoming' } }
    )

    return res.json(replacement)
  } catch (error) {
    res.status(200).json({ message: error.message })
  }
}
