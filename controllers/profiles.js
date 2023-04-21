import { Profile } from '../models/profile.js'
import { Sneaker } from '../models/sneaker.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: 'Community'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    Sneaker.find({owner: req.params.profileId})
    .then(sneakers => {
      res.render('profiles/show', {
        title: profile.name,
        profile,
        sneakers
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/profiles')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}



export {
  index,
  show,

}