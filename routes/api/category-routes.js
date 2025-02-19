const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // find all categories
    const categoriesData = await Category.findAll({
      // be sure to include its associated Products
      include: [Product]
    });
    res.status(200).json(categoriesData);

  } catch (e) {
    res.status(500).json(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value
    const categoryData = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [Product],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  /* req.body should look like this...
    {
      "category_name": "Sea Food"
    }
  */
  try {
    const categoriesData = await Category.create(req.body);

    res.status(200).json(categoriesData);
  } catch (e) {
    res.status(500).json(e);
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoriesData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(500).json(categoriesData);
  } catch (e) {
    res.status(500).json(e)
  }

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
