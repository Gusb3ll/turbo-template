import type { Application, Request, Response } from 'express'

import 'dotenv/config'
import express from 'express'

const app: Application = express()

app.use(express.json())


app.get('/', (_req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hello World!' })
})

export default app