var sql = require("mysql2");
var con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "libraryDB"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected Successfully!");
})

// con.query("create database libraryDB", function (err) {
//     if (err) throw err;
//     console.log("Database Created Successfully!");
// });

// con.query("create table authors(authoID int primary key, authorName varchar(30) not null, Country varchar(20) not null)", function (err) {
//     if (err) throw err;
//     console.log(" Authors Table Created!");
// })

// con.query("create table books(bookid int primary key, bookName varchar(30) not null, category varchar(30),price decimal(10,2),publishDate date,authoID int, foreign key (authoID)references authors(authoID)on delete cascade)", function (err) {
//     if (err) throw err;
//     console.log(" Books Table Created!");
// });


// var sql = "insert into authors(authoID,authorName,Country)values?";
// var values = [
//     [101, 'J.K. Rowling', 'United Kingdom'],
//     [102, "Franz Kafka", 'Czech Republic'],
//     [103, 'Gabriel Garcia Marquez', 'Colombia'],
//     [104, 'Haruki Murakami', 'Japan'],
//     [105, 'Chinua Achebe', 'Nigeria']
// ];
// con.query(sql, [values], function (err) {
//     if (err) throw err;
//     console.log(" Records inserted successfully into Authors table!");
// })

// var sql = "insert into books(bookid,bookName,category,price,publishDate,authoID)values?";
// var values = [
//     [201, 'Harry Potter and the Sorcerers Stone', 'Fantasy', 250.50, '1997-06-26', 101],
//     [202, 'The Metamorphosis', 'Absurdist Fiction', 150.75, '1915-11-01', 102],
//     [203, 'One Hundred Years of Solitude', 'Magic Realism', 300.00, '1967-05-30', 103],
//     [204, 'Norwegian Wood', 'Romance', 200.25, '1987-09-04', 104],
//     [205, 'Things Fall Apart', 'Historical Fiction', 180.90, '1958-06-17', 105]
// ];
// con.query(sql, [values], function (err) {
//     if (err) throw err;
//     console.log(" Records inserted successfully into Books table!");
// });

// con.query("UPDATE books SET authoID = 101 WHERE bookid = 201");
// con.query("UPDATE books SET authoID = 102 WHERE bookid = 202");
// con.query("UPDATE books SET authoID = 103 WHERE bookid = 203");
// con.query("UPDATE books SET authoID = 104 WHERE bookid = 204");
// con.query("UPDATE books SET authoID = 105 WHERE bookid = 205");


// con.query(`select b.bookid,b.bookName,b.Category,b.price,b.publishDate,a.authoID,a.authorName,a.Country from books b inner join authors a on b.authoID=a.authoID`, function (err, res) {
//     if (err) throw err;
//     console.log(res);
// })

// con.query("select * from books order by price desc", function (err, res) {
//     if (err) throw err;
//     console.log(res);
// })

// con.query("select * from books where year(publishDate) > 1960", function (err, res) {
//     if (err) throw err;
//     console.log(res);
// })

