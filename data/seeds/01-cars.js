// STRETCH
const cars = [
    {
    vin: '11111111111111111', 
    make: 'Subaru', 
    model: 'WRX STI', 
    mileage: '80,000', 
    title: 'Clean', 
    transmission: 'Manual',
},
    {
    vin: '22222222222222222', 
    make: 'Honda', 
    model: 'Civic', 
    mileage: '100,000', 
    title: 'Clean', 
    transmission: 'Automatic',
},
    {
    vin: '33333333333333333', 
    make: 'Subaru', 
    model: 'Outback', 
    mileage: '120,000', 
    title: 'Clean', 
    transmission: 'Automatic',
},
]

exports.cars = cars

exports.seed = function(knex) {
    return knex('cars').truncate()
        .then(function () {
            return knex('cars').insert(cars)
        })
}