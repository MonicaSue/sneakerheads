import { Router } from 'express'
// import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Home Page' })
})

export {
  router
}
