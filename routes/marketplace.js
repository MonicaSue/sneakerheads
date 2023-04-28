import { Router } from 'express'
import * as marketplaceCtrl from '../controllers/marketplace.js'
import * as sneakersCtrl from '../controllers/sneakers.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, marketplaceCtrl.index)
router.get('/:sneakerId', isLoggedIn, sneakersCtrl.show)

export {
  router
}