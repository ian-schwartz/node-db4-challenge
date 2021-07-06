const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return db.select('ingredients.name', 'quantity')
       .from('recipe_ingredients')
       .join('indredients', 'ingredient_id', 'ingredients.id')
       .where({ recipe_id });     
}

function getInstructions(recipe_id) {
    return db.select('steps', 'step_number')
       .from('directions')
       .where({ recipe_id });
}