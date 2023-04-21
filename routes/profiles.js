import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// All routes are local:3000/profiles

router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/:sneakerId', isLoggedIn, profilesCtrl.show)

router.post('/:sneakerId/headlines', isLoggedIn, profilesCtrl.createHeadline)

export {
  router
}