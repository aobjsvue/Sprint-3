// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i]);
        }
    }

    let countProduct = cartList.length;
    document.getElementById("count_product").innerHTML = countProduct;

    console.log(cartList);
}

// Exercise 2
function cleanCart() {
    cartList = [];
    document.getElementById("count_product").innerHTML = 0;

    total = 0;

    cart = [];
    document.getElementById("cart_list").innerHTML = "";
    document.getElementById("cart_empty").style.display = "block";
    document.getElementById("cart_empty").innerHTML = "Your cart is empty.";
    document.getElementById("total_price").innerHTML = total.toFixed(2);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    totalCartList = 0;
    total = 0;

    for (let i = 0; i < cartList.length; i++) {
        totalCartList += cartList[i].price;
    }

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }

    if (total > 0) {
        document.getElementById("total_price").innerHTML = total.toFixed(2);
        document.getElementById("cart_empty").style.display = "none";
    } else {
        document.getElementById("total_price").innerHTML = "0.00";
        document.getElementById("cart_empty").innerHTML = "Your cart is empty.";
    }

    console.log(totalCartList);
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart = [];
    let i, j;
    let repeated = false;
    
    // Outer for loop
    for (i = 0; i < cartList.length; i++) {
        // Inner for loop
        if (cart.length == 0) {
            cartList[i].quantity = 1;
            cart.push(cartList[i]);
        }
        
        for (j = 0; j < cart.length; j++) {
            // Skip self comparison
            if (i !== j) {
                // Check for duplicate
                if (cartList[i].id === cart[j].id) {
                    cart[j].quantity++;
                    repeated = true;
                    // Terminate inner loop
                    break;
                } else {
                    repeated = false;
                }
            }
            // Terminate outer loop
        }

        if (!repeated && i != 0) {
            cartList[i].quantity = 1;
            cart.push(cartList[i]);
        }
    }

    console.log(cart);
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == 1) {
            if (cart[i].quantity >= 3) {
                cart[i].price = 10;
                cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
            } else {
                cart[i].price = 10.5;
                cart[i].subtotal = cart[i].price * cart[i].quantity;
            }
        }
        if (cart[i].id == 3) {
            if (cart[i].quantity >= 10) {
                cart[i].price = 3.33;
                cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
            } else {
                cart[i].price = 5;
                cart[i].subtotal = cart[i].price * cart[i].quantity;
            }
        }
    }
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let cartTable = "";

    for (let i = 0; i < cart.length; i++) {
        cartTable += "<tr>";
		cartTable += '<th scope="row">';
        cartTable += cart[i].name;
        cartTable += "</th>";
		cartTable += "<td>";
        cartTable += "$" + cart[i].price;
        cartTable += "</td>";
		cartTable += "<td>";
        cartTable += cart[i].quantity;
        cartTable += "</td>";
		cartTable += "<td>";
        cartTable += "$" + (cart[i].price * cart[i].quantity).toFixed(2);
        cartTable += "</td>";
        cartTable += "</tr>";
    }

    document.getElementById("cart_list").innerHTML = cartTable;
    calculateTotal();
}

function open_modal(){
	console.log("Open Modal");
    generateCart();
    applyPromotionsCart();
	printCart();
}