
const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')

}

const getById = id => {
  return db('cars').where('id', id).first()
}

// const create = (car) => {
//   return db('cars')
//     .insert(car)
//     .then(([id]) => getById(id))
// }
const create = (car) => {

  return db('cars')
    .insert(car)
      .then(([id]) => {
        return getById(id)
      })

}

const updateById = async (id, car) => {
  await db('cars')
    .where('id', id)
    .update(car)
  return getById(id)
}

const deleteById = id => {
  return db('cars')
    .where('id', id)
    .del()
}

const getByVin = (vin) => {
  return db('cars').where('vin', vin).first()
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
  getByVin,
}