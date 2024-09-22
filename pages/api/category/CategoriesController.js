const { where } = require('sequelize');
const db = require('../../../server/models');  // Note that the entire db object is imported here
const Category = db.Category;  // Extract the Category model from the db object
const { Op } = require('sequelize');

// Define the getCategories function
const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ['id', 'name', 'sub_for'],  // Ensure that only relevant fields are retrieved
    });
    console.log("Categories:", categories);  // Log the retrieved category data
    res.json(categories);  // Send the category data as a JSON response
  } catch (error) {
    console.error('Failed to retrieve categories', error);  // Log the error if categories retrieval fails
    res.status(500).send('Server Error');  // Return a 500 status code in case of a server error
  }
};

// Define the getParentCategories for Homepage
/* helped by chatGPT, 
*  prompt: can i retrieve categories that only sub_for 1 and category name is not "All Products"
*/ 
const getPrimaryCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes:['id', 'name', 'sub_for', 'image'],
      where: {
        sub_for: 1,
        name: {
          [Op.ne]: 'All Products'
        }
      }
    });
    console.log('Categories:', categories);
    res.json(categories);
  } catch (error) {
    console.error('Failed to retrieve parent categories', error);
    res.status(500).send('Server Error');
  }
}

// Export the getCategories function
module.exports = { getCategories, getPrimaryCategories };
