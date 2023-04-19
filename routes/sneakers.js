import { Router } from 'express'
import * as sneakersCtrl from '../controllers/sneakers.js'

const router = Router()

// GET local:3000/sneakers
router.get('/', sneakersCtrl.index)

export {
  router
}