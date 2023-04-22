import { Sneaker } from '../models/sneaker.js'

function index(req, res) {
  Sneaker.find({owner: req.user.profile._id})
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

// code found https://coderrocketfuel.com/article/handle-get-request-query-string-parameters-in-express-js
function search(req, res) {
  const brandName = req.query.brandName
  console.log('BrandSEARCH', brandName)
  Sneaker.find({ brand: brandName })
  .then(sneakers => {
    res.render('sneakers/search', {
      sneakers,
      title: 'Search Results'
    })
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  req.body.isForSale = !!req.body.isForSale
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
  .populate([
    {path: 'owner'},
  ])
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

function edit(req, res) {
  console.log('edit')
  console.log(req.params.sneakerId)
  Sneaker.findById(req.params.sneakerId)
  .then(sneaker => {
    res.render('sneakers/edit', {
      sneaker, 
      title: 'Edit'
    })
  })
}

function update(req, res) {
  req.body.isForSale = !!req.body.isForSale
  Sneaker.findById(req.params.sneakerId)
  .then(sneaker => {
    if (sneaker.owner.equals(req.user.profile._id)) {
      sneaker.updateOne(req.body)
      .then(() => {
        res.redirect(`/sneakers/${sneaker._id}`)
      })
    } else {
      throw new Error (`Not Authorized`)
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/sneakers')
  })
}



function deleteSneaker(req, res) {
  Sneaker.findById(req.params.sneakerId)
  .then(sneaker => {
    if (sneaker.owner.equals(req.user.profile._id)) {
      sneaker.deleteOne()
      .then(() => {
        res.redirect('/sneakers')
      })
    } else {
      throw new Error (`Not Authorized`)
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/sneakers')
  })
}

function createSaleSheets(req, res) {
  Sneaker.findById(req.params.sneakerId)
  .then(sneaker => {
    sneaker.saleSheets.push(req.body)
    sneaker.save()
    .then(() => {
      res.redirect(`/sneakers/${sneaker._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteSaleSheet(req, res) {
  Sneaker.findById(req.params.sneakerId)
  .then(sneaker => {
    const saleSheet = sneaker.saleSheets.id(req.params.saleSheetId)
    sneaker.saleSheets.remove(saleSheet)
    sneaker.save()
    .then(() => {
      res.redirect(`/sneakers/${sneaker._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
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
  search,
  create,
  show,
  edit,
  update,
  deleteSneaker as delete,
  createSaleSheets,
  deleteSaleSheet
}