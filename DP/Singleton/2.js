//mongoDB

//mongoose 모듈
Mongoose.prototype.connect = function(uri, options, callback) {
    const _mongoose = this instanceof Mongoose ? this : mongoose;
    const conn = _mongoose.connection;

    return _mongoose._promiseOrCallback(callback, cb => {
        conn.openUri(uri, options, err => {
            if (err != null) {
                return cb(err);
            }
            return cb(null, _mongoose);
        });
    });
};

//MySQL

//메인 모듈
const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'example.org',
    user: 'yurei',
    password: 'secret',
    database: '내디비'
});

//모듈 A
pool.query(query, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results[0].solution);
});

//모듈 B
pool.query(query, function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results[0].solution);
});

