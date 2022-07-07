import express from 'express'
import { getUSCities } from '../controllers/USCities.js'
import { updateState } from '../controllers/updateState.js'

const router = express.Router()

router.get('/', getUSCities)

export default router
