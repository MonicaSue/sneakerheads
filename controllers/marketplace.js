import { Profile } from '../models/profile.js'
import { Sneaker } from '../models/sneaker.js'

function index(req, res) {
  Sneaker.find({ isForSale: 'true' })
  .then(sneakers => {
    console.log('marketplace console', sneakers)
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

function show(req, res) {
  console.log('marketplace show works')
}

export {
  index,
  show,
}