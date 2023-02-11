const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// verified through insomnia that the categories endpoint works with CRUD operations

router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      order: ['category_name'],
      include: [{ model: Product }],
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
try{
  const categoryData = await Category.create(req.body)
  res.status(200).json({message: `Category created ${categoryData}`});
} catch (err) {
  res.status(500).json(err)
  // create a new category
}
});

router.put('/:id', async (req, res) => {
  try{
    // use the findByPk method to retrieve the category data using the 'id'
  const categoryData = await Category.findByPk(req.params.id);
  if (!categoryData) {
    return res.status(404).json({ message: 'Category not found' });
  }
  await categoryData.update(req.body);
  res.status(200).json({message: 'Category Updated'});
  // update a category by its `id` value
} catch (err) {
  res.status(500).json(err)
}
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id);
    if (!categoryData){
      return res.status(400).json({ message: 'Category not found'});
    }
    await categoryData.destroy();
    res.status(200).json({message: 'Category deleted'})
  } catch (err) {
    request.status(400).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
