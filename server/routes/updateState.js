import express from 'express'
import { updateState } from '../controllers/updateState.js'

const router = express.Router()

router.get('/', updateState)

export default router
