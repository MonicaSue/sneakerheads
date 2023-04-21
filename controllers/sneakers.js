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
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
} 

function newSneakers(req, res) {
  res.render('sneakers/new', {
    title: 'Add Sneakers',
  })
}

function create(req, res) {
  Sneaker.create(req.body)
  .then(sneaker => {
    console.log(sneaker)
    res.redirect('/sneakers')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/sneakers/new')
  })
}

function show(req, res) {
  Sneaker.findById(req.params.sneakerId)
  .then(sneaker => {
    res.render('sneakers/show', {
      title: 'Sneaker Detail',
      sneaker,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  newSneakers as new,
  create,
  show,

}