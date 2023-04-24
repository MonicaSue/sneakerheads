import { Router } from 'express'
import * as sneakersCtrl from '../controllers/sneakers.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// All routes are local:3000/sneakers

router.get('/', isLoggedIn, sneakersCtrl.index)
router.get('/new', isLoggedIn, sneakersCtrl.new)
router.get('/search', isLoggedIn, sneakersCtrl.search)
router.get('/:sneakerId', isLoggedIn, sneakersCtrl.show)
router.get('/:sneakerId/edit', isLoggedIn, sneakersCtrl.edit)
router.get('/:sneakerId/comments/:commentId/edit', isLoggedIn, sneakersCtrl.editComment)

router.post('/', isLoggedIn, sneakersCtrl.create)
router.post('/:sneakerId/saleSheets', isLoggedIn, sneakersCtrl.createSaleSheets)
router.post('/:sneakerId/comments', isLoggedIn, sneakersCtrl.addComment)

router.put('/:sneakerId', isLoggedIn, sneakersCtrl.update)

router.delete('/:sneakerId', isLoggedIn, sneakersCtrl.delete)
router.delete('/:sneakerId/saleSheets/:saleSheetId', isLoggedIn, sneakersCtrl.deleteSaleSheet)
router.delete(':/sneakerId/comments/:commentId', isLoggedIn, sneakersCtrl.deleteComment)

export {
  router
}