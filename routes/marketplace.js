import { Router } from 'express'
import * as marketplaceCtrl from '../controllers/marketplace.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()



export {
  router
}