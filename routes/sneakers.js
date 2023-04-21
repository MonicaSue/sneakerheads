import { Router } from 'express'
import * as sneakersCtrl from '../controllers/sneakers.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET local:3000/sneakers
router.get('/', sneakersCtrl.index)
router.get('/new', isLoggedIn, sneakersCtrl.new)
router.get('/:sneakerId', isLoggedIn, sneakersCtrl.show)
router.get('/:sneakerId/edit', isLoggedIn, sneakersCtrl.edit)

router.post('/', sneakersCtrl.create)

router.put('/:sneakerId', sneakersCtrl.update)

router.delete('/:sneakerId', sneakersCtrl.delete)

export {
  router
}