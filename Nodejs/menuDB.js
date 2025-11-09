var sql = require("mysql2");
var readline = require('readline-sync');
var con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "menuDB"
})
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected Successfully!");
    menu();
})

// con.query("create database menuDB", function (err) {
//     if (err) throw err;
//     console.log("Database Created Successfully!");
// })

// con.query("create table bookSystem(bookid int primary key, name varchar(20),author varchar(20),genre varchar(20),price decimal(10,2))", function (err) {
//     if (err) throw err;
//     console.log("Book System Table Created!");
// })

function menu() {
    while (true) {
        console.log("Book Management System");
        console.log("1.Insert");
        console.log("2.Display");
        console.log("3.Update");
        console.log("4.Delete");
        console.log("5.Exit");
        var choice = readline.questionInt("\nEnter your choice:");

        switch (choice) {
            case 1: insertBook();
                break;
            case 2: displayBook();
                break;
            case 3: updateBook();
                break;
            case 4: deleteBook();
                break;
            case 5: console.log("Exiting...");
                return;
            default: console.log("Invalid Choice! Please try again.");
        }
    }
}

function insertBook() {
    var bookid = readline.questionInt("Enter book id:");
    var name = readline.question("Enter book name:");
    var author = readline.question("Enter author name:");
    var genre = readline.question("Enter genre:");
    var price = readline.questionInt("Enter price:");

    var sql = `insert into bookSystem(bookid,name,author,genre,price)values(?,?,?,?,?)`;
    var values = [bookid, name, author, genre, price]

    con.query(sql, values, function (err) {
        if (err) throw err;
        console.log("Book inserted successfully!");
    })

}

function displayBook() {
    con.query("select*from bookSystem", function (err, res) {
        if (err) throw err;
        console.log(res);
    })
}

function updateBook() {
    var bookid = readline.questionInt("Enter book id to update:");
    var price = readline.questionInt("Enter new price:");

    var sql = "update bookSystem set price=? where bookid=?";
    con.query(sql, [price, bookid], function (err) {
        if (err) throw err;
        console.log("Book updated successfully!");
    })
}

function deleteBook() {
    var bookid = readline.questionInt("Enter the bookid to delete:");
    var sql = "delete from bookSystem where bookid=?";
    con.query(sql, [bookid], function (err) {
        if (err) throw err;
        console.log("Book deleted successfully!");
    })
}