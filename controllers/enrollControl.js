const connection = require('../config/db');

exports.getEnrollment=(req,res)=>{
    connection.query('SELECT * FROM enrollment', (err,rows, fields)=>{
        if(err) throw err;
        res.json(rows)
    });
};



exports.createRecord=(req,res)=>{
    const {pname,category,scount,lcode, lupdate} = req.body;
    connection.query('INSERT INTO enrollment (productName, category, stockCount, locationCode, lastUpdated) VALUES (?,?,?,?, CURRENT_TIMESTAMP)', [pname,  category, scount, lcode, lupdate], (err,result)=>{
        if(err) throw err;
        res.json({message: 'User created successfully', userId: result.insertId});
    });
};



