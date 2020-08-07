const router = require('express').Router();
let Week = require('../models/week.model');

router.route('/').get((req, res) => {
    Week.find()
    .then(week => res.json(week))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const category = req.body.category;
  const amount = Number(req.body.amount);
  const description = req.body.description;
  const rate = Number(req.body.rate);
  const date = Date.parse(req.body.date);

  const newWeek = new Week({
    username,
    category,
    amount,
    description,
    rate,
    date,
  });

  newWeek.save()
  .then(() => res.json('Week added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    newWeek.findById(req.params.id)
    .then(week => res.json(week))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    newWeek.findByIdAndDelete(req.params.id)
    .then(() => res.json('Week deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    newWeek.findById(req.params.id)
    .then(week => {
        const username = req.body.username;
        const category = req.body.category;
        const amount = Number(req.body.amount);
        const description = req.body.description;
        const rate = Number(req.body.rate);
        const date = Date.parse(req.body.date);

      week.save()
        .then(() => res.json('Week updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;