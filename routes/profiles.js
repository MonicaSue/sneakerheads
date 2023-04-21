import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// All routes are local:3000/profiles

router.get('/', isLoggedIn, profilesCtrl.index)



export {
  router
}