const Cars = require('./cars-model')
const db = require('../../data/db-config')
const vinValidator = require('vin-validator');

const checkCarId = async(req, res, next) => {
  try {
    const car = await Cars.getById(req.params.id)
    if(!car) {
      next({
        status: 404,
        message: `car with id ${req.params.id} is not found`
      })
    } else {
      req.car = car
      next()
    }
  } catch(err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  const error = { status: 400}
  const { vin, make, model, mileage } = req.body
    if (!vin || vin === undefined) {
    error.message = 'vin is missing'
  } else if (!make || make === undefined) {
    error.message = 'make is missing'
  } else if (!model || model === undefined) {
    error.message = 'model is missing'
  } else if (!mileage || mileage === undefined) {
    error.message = 'mileage is missing'
  } 
  if (error.message) {
    next(error)
  } else {
    next()
  }
}

const checkVinNumberValid = async(req, res, next) => {
  const { vin } = req.body
  const validated = await vinValidator.validate(vin)
    if (validated) {
      next()
    } else {
      next({
        status: 400, 
        message: `${vin} is invalid`
      })
    }
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const existing = await db('cars')
      .where('vin', req.body.vin.trim())
      .first()
    if(existing) {
      next({
        status: 400, 
        message: `vin ${vin} already exists`
      })
    } else {
      next()
    }
  } catch(err){
    next(err)
  }
}

module.exports = {
  checkCarId, 
  checkCarPayload, 
  checkVinNumberUnique, 
  checkVinNumberValid
}
