

exports.up = function (knex) {
  return knex.schema.createTable('cars', function (cars) {
    cars.increments()

    cars.string('vin', 17).unique().notNullable();
    cars.string('make', 128).notNullable();
    cars.string('model', 128).notNullable();
    cars.integer('mileage').unsigned().notNullable();
    cars.string('title', 128);
    cars.string('transmission', 128);

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
