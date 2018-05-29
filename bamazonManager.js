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
  console.log("\n--------------------------\n")
  console.log("Welcome to Bamazon!")
  console.log("\n--------------------------\n")
  allProducts();
  
//   runSearch();
});

function allProducts() {
    
    connection.query("SELECT * FROM products", function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + "|" + res[i].stock_quantity);
      } 
      console.log("-----------------------------------");
      Manager();
      connection.end();
    });
    
  } 

  function Manager(){

    inquirer.prompt([
        {
            type: "list",
            name:"options",
            message: "Please select and option:",
            choices:["View products for sale", "View low inventory","Add to inventory", "Add new product"],
            filter: function(man){
                if(man=== "View products for sale"){
                    return "sale";
                }else if (man === "View low inventory"){
                    return "lowInventory";
                }else if(man === "add to inventory"){
                    return "addInventory";
                }else if(man === "Add new product"){
                    return "addProduct";
                }
            }
        }
    ]).then(function(input){
        if(input.options === "sale"){
           allProducts();
        }else if (input.options === " lowInventory"){
            showLowinventory();
        }else if (input.options === "addinventory"){
            showAddInventory();
        } else if (input.options==="addProduct"){
            showAddProduct();
        }
    })
  }



