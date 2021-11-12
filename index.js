const server = require('./api/server')
require('colors')

const port = process.env.PORT || 9000;

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`.bgBlue))
