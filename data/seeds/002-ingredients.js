exports.seed = function(knex) {
  return knex('ingredients').insert([
    { name: 'eggs' },
    { name: 'chedder cheese' },
    { name: 'salt' },
    { name: 'butter' },
    { name: 'turkey' },
    { name: 'bacon' },
    { name: 'mustard' },
    { name: 'bread' }
  ]);
};
