const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{
      association: [Product]
    }]
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      association: [Product]
    }]
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.category_name)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
});

module.exports = router;
