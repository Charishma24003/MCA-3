var sql = require('mysql2');
var con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bookDB"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected Successfully!")
});

// con.query("create database bookDB", function (err) {
//     if (err) throw err;
//     console.log("Database Created Successfully!");
// });

// var sql = " create table books (book_id int(10) primary key,book_name varchar(20), author varchar(30), genre varchar(20),price decimal(10,2))";
// con.query(sql, function (err) {
//     if (err) throw err;
//     console.log("Table Created!");
// })

// var sql = "insert into books(book_id,book_name,author,genre,price)values?";
// var values = [
//     [101, 'The Kite Runner', 'Khaled Hosseini', 'Fiction', 120.99],
//     [102, 'Verity', 'Colleen Hoover', 'Thriller', '100.90'],
//     [103, 'Becoming', 'Michelle Obama', 'Autobiography', '150.50'],
//     [104, 'The Alchemist', 'Paulo Coelho', 'Adventure', '130.75'],
//     [105, '1984', 'George Orwell', 'Dystopian', '110.00']
// ]

// con.query(sql, [values], function (err) {
//     if (err) throw err;
//     console.log("Record inserted successfully!");
// })


// con.query("select *from books", function (err, res) {
//     if (err) throw err;
//     console.log(res);
// });

