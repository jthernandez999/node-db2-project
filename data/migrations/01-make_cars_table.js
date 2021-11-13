

exports.up = function (knex) {
  return knex.schema.createTable('cars', function (cars) {
    cars.increments()

    cars.string('vin').unique().notNullable();
    cars.string('make').notNullable();
    cars.string('model').notNullable();
    cars.integer('mileage').notNullable();
    cars.string('title');
    cars.string('transmission');

  })
};
// exports.up = function (knex) {
//   // DO YOUR MAGIC
//   return knex.schema.createTable('cars', tbl => {
//     tbl.increments('id');
//     tbl.string('vin').unique().notNullable()
//     tbl.string('make').notNullable()
//     tbl.string('model').notNullable()
//     tbl.integer('mileage').notNullable()
//     tbl.string('title')
//     tbl.string('transmission')

//   })
// };

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars')
};
