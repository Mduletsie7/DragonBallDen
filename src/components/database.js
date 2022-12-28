
  const {
    createPool
  } = require('mysql');
  
  
  const pool = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"store_test",
    connectionLimit: 10
  })
  
  pool.query(`select * from products`, function(err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
  }) 

