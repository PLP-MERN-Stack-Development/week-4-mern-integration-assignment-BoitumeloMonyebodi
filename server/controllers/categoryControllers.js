import Category from '../models/Category.js';

// Get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

// Create a new category
export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const existing = await Category.findOne({ name });
    if (existing) {
      return res.status(400).json({ error: 'Category already exists' });
    }
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category' });
  }
};