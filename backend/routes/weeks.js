const router = require('express').Router();
let Exercise = require('../models/week.model');
const Week = require('../models/week.model');

router.route('/').get((req, res) => {
  Week.find()
  .then(week => res.json(week))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const sales = Number(req.body.sales);
  const ecomm = Number(req.body.ecomm);
  const social = Number(req.body.social);
  const ads = Number(req.body.ads);
  const other = Number(req.body.other);
  const date = Date.parse(req.body.date);

  const newWeek = new Week({
    sales,
    ecomm,
    social,
    ads,
    other,
    date
  });

  newWeek.save()
  .then(() => res.json('Week added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Week.findById(req.params.id)
    .then(week => res.json(week))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Week.findByIdAndDelete(req.params.id)
    .then(() => res.json('Week deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Week.findById(req.params.id)
    .then(week => {
      week.sales = Number(req.body.sales);
      week.ecomm = Number(req.body.ecomm);
      week.social = Number(req.body.social);
      week.ads = Number(req.body.ads);
      week.other = Number(req.body.other);
      week.date = Date.parse(req.body.date);

    week.save()
      .then(() => res.json('Week updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;