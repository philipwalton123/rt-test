const env = process.env.NODE_ENV || 'development'; // <<< the current env name (or 'development')
const config = require('./pgconfig.json')[env]; //<<< gets the config for the RDS database relevant to this env


const Pool = require('pg').Pool
const RDSpool = new Pool({
    user: config.username,
    host: config.host,
    database: config.database,
    password: config.password,
    port: config.port,
})

// RDSpool.connect()
//   .then((response)=> {
//     console.log(response)
//     console.log("Connection Success")
//   })
//   .catch((err) => {
//     console.log(err)
//     console.log("Connection Error")
//   })

  module.exports = RDSpool