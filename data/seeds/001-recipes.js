exports.seed = function(knex) {
  return knex('recipes').insert([
    { name: 'Scrambled Eggs' },
    { name: 'Club Sandwich' }
  ]);
};
