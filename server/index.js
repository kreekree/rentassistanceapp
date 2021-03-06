import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'

import getUSCities from './routes/USCities.js'
import updateState from './routes/updateState.js'

const app = express()
app.use(cors())

app.use('/data/USCities', getUSCities)
app.use('/data/updateState', updateState)

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

const CONNECTION_URL = process.env.ATLAS_URI
const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(console.log(`Server running on port: ${PORT}`))
    )
  )
  .catch((error) => console.log(error.message))
