var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  
  port: 3306,

  
  user: "root",

 
  password: "root",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  allProducts();
//   runSearch();
});

function allProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + "|" + res[i].stock_quantity);
      } 
      console.log("-----------------------------------");
      runSearch();
    });
    
  } 

    function runSearch() {
        inquirer
          .prompt([
        {
            name: "items",
            type: "input",
            message: "Whats the ID number of the product you would like to purchase?"
          },
        {
            name: "amount",
            type: "input",
            message: "How many would you like to order?"

        }
          ]).then(function(input) {
            var item = input.items;

            var amount = input.amount; 

            var query = "SELECT * FROM products, WHERE ?";

            connection.query(query, { items: item }, function(err, res) {
                if(err) throw err;
            
            var product = res[0];   
            
            if(amount <= product.stock_quantity){
                console.log("Congrats, the prodct you requested is in stock!")

            var update = "Update products SET stock_quantity =" + (product.stock_quantity - quantity) + "WHERE items =" + item;  
            }


    
       
            });
          });
      }

      function nextQuestion() {
        inquirer
          .prompt({
            name: "amount",
            type: "input",
            message: "How many would you like to order?"
          })
          .then(function(answer) {
            var query = "SELECT stock_quantity, FROM bamazon_db WHERE ?";
            connection.query(query, { amount: answer.amount }, function(err, res) {
              for (var i = 0; i < res.length; i++) {
                console.log("In sotck: " + res[i].stock_quantity );
              }
            
            });
          });
      }

    