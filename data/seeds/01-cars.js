// STRETCH
const cars = [
    {
    vin: 'JM1GJ1T63F1188310', 
    make: 'Subaru', 
    model: 'WRX STI', 
    mileage: '80,000', 
    title: 'Clean', 
    transmission: 'Manual',
},
    {
    vin: '1FMCU9E79BKC47905', 
    make: 'Honda', 
    model: 'Civic', 
    mileage: '100,000', 
    title: 'Clean', 
    transmission: 'Automatic',
},
    {
    vin: 'JS3TX92V914104486', 
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