const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/profile/:5f2f901449bdd3302576a00f').post((req, res) => {
  User.findById('5f2f901449bdd3302576a00f')
    .then(user => {
      user.business = String(req.body.business);
      user.type = Number(req.body.type);
    week.save()
      .then(() => res.json('User updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


// router.route('/add').post((req, res) => {
//   const business = req.body.business;

//   const newUser = new User({username});

//   newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;