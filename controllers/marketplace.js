import { Sneaker } from '../models/sneaker.js'

function index(req, res) {
  Sneaker.find({ isForSale: 'true' })
  .then(sneakers => {
    res.render('marketplace/index', {
      sneakers,
      title: 'Marketplace'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
}