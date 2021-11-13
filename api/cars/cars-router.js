// DO YOUR MAGIC
const router = require('express').Router()
const Car = require('./cars-model')
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberUnique,
    checkVinNumberValid,
} = require('./cars-middleware')



router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch(err){
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    res.json(req.car)
})

router.delete('/:id', checkCarId, async (req, res, next) => {
    try {
        const deleted = await Car.deleteById(req.params.id)
        res.json(deleted)
    } catch(err){
        next(err)
    }
})

router.post('/', checkCarPayload, checkVinNumberUnique, async(req, res, next) => {
    try {
        const newCar = await Car.create(req.body)
        res.status(201).json(newCar)
    }
    catch(err){
        next(err)
    }
})

router.put('/:id', (req, res, next) => {
    Car.updateById(req.params.id, req.body) 
        .then(() => {
            return Car.getById(req.params.id)
        })
        .then(car => {
            if(car) {
                res.json(car)
            } else {
                res.status(404).json({
                    message: 'there is no car with the given id'
                })
            }
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
    })
})


module.exports = router;