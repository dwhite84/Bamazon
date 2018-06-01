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
  // console.log("connected as id " + connection.threadId);
  // console.log("\n--------------------------\n")
  // startPrompt();
  allProducts();
 inventoryQuestion();
  // allProducts();
//   runSearch();
});

function startPrompt() {

  inquirer.prompt([{

      type: "confirm",
      name: "confirm",
      message: "Welcome to Bamazon! Would you like to view our inventory?",
      default: true

  }]).then(function(user) {
      if (user.confirm === true) {
        allProducts();
        inventoryQuestion();

        

      } else {
          console.log("Thank you! Come back soon!");
      }
  });
 
}


function allProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + "|" + res[i].stock_quantity);
      } 
      console.log("-----------------------------------");
      // runSearch();
      
    });
    
  } 

  function inventoryQuestion(inventory){
    inquirer
    .prompt([
  {
      type:"input",
      name:"choice",
      message: "Whats the ID number of the product you would like to purchase?",
      
     
      // validate: function(value){
      //   return !isNan(value) || value ==="a"; 
      // }
    }
  ]).then(function(value){
    var choiceID = parseInt(value.choice);
    var item = allProducts(choiceID, inventory);

    if(item){
      quantityOnHand(item);
    }
    else{
      console.log("This item is not avaiable");
      allProducts();
    }

  });
  }
  
 
  // function inventoryCheck (choiceID, inventory){
  //   for(var i=0; i < inventory.length; i++){
  //     if(inventory[i].id === choiceID){
  //       return inventory[i];
  //     }
  //   }

  //   return null;
  // };

  function quantityOnHand(){
    inquirer
      .prompt([
        {
          type:"input",
          name: "quantity",
          message:"How many would you like to order?",
          validate: function(value){
            return value > 0 
          }

        }
      ]).then(function(value){
        var quantity = parseInt(value.quantity);

        if(quantity > product.stock_quantity){
          console.log("Not in stock");
          allProducts();
        }
        else{
          purchase();
        }
      })
  }


            function purchase (product,quantity){
              connection.query( 
                "Update products SET stock_quantity = stock_quantity - ? WHERE id = ?",
                [quantity, product.id],

                function(err,res){
                  console.log("\nItem Purchased" + quantity + "" + product.product_name)
                  allProducts();
                }
              );

            }


    
   
    