import { Sneaker } from '../models/sneaker.js'

function index(req, res) {
  Sneaker.find({})
  .populate('owner')
  .then(sneakers => {
    console.log(sneakers)
    res.render('sneakers/index', {
      sneakers,
      title: 'My Inventory'
    })
  })
  .catch((err) => {
    console.log(err)
    res.redirect('/')
  })
} 

function newSneakers(req, res) {
  console.log('New Works')
  res.render('sneakers/new', {
    title: 'Add Sneakers',
  })
}


export {
  index,
  newSneakers as new,

}