const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [{
      association: [Product]
    }]
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      association: [Product]
    }]
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.category_name)
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.findOne({
    where: {
      id: req.params.id
    }
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
});

module.exports = router;
