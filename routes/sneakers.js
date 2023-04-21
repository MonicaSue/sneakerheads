import { Router } from 'express'
import * as sneakersCtrl from '../controllers/sneakers.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// All routes are local:3000/sneakers

router.get('/', isLoggedIn, sneakersCtrl.index)
router.get('/new', isLoggedIn, sneakersCtrl.new)
router.get('/:sneakerId', isLoggedIn, sneakersCtrl.show)
router.get('/:sneakerId/edit', isLoggedIn, sneakersCtrl.edit)

router.post('/', isLoggedIn, sneakersCtrl.create)

router.put('/:sneakerId', isLoggedIn, sneakersCtrl.update)

router.delete('/:sneakerId', isLoggedIn, sneakersCtrl.delete)

export {
  router
}