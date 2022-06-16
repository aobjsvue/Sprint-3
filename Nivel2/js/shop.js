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
    // Com hauràs pogut observar, tenim molts ítems repetits al carretó de la compra. Seria més convenient que no apareguessin repetits, sinó que cada producte del carret comptés amb un camp quantitat. Per a això, hauràs de completar la funció generateCart(), la qual rep l'array cartList, generant l'array cart. Crea un botó per tal de poder cridar a la funció generateCart(). Ajuda: Simplement s'ha de fer un bucle sobre el array cartList que rep la funció. -Per cada element de cartList, hem de validar si existeix en el array cart: En cas que no existeixi, l'afegim a l'array cart (compte, que no se t'oblidi agregar la propietat quantity amb valor 1 al producte abans de fer push). Si, en canvi, ja existeix aquest producte al carretó, haurem d'incrementar el camp quantity.
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
    // El client ens ha transmès dos tipus de promocions que vol per a la seva e-commerce: Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros. Quan es compren 10 o més productes per a fer pastís, el seu preu es rebaixa a 2/3. En aquest exercici has de completar la funció applyPromotionsCart(), la qual rep l'array cart, modificant el camp subtotalWithDiscount en cas que s'apliqui la promoció. Ajuda: com que producte del carret té quantitat, ja pots validar si té descompte: En cas que un producte tingui descompte, s'ha de guardar el preu total amb descompte en el camp: subtotalWithDiscount. Si no s'ha d'aplicar descompte, no fa falta que guardis res.
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
    //El codi encarregat de mostrar el carret de la compra en el modal amb id "cartModal", ha d'incloure's dins de la funció printCart()
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


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    let j;
    let repeated = false;

    if (cart.length == 0) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products[i].quantity = 1;
                cart.push(products[i]);
                break;
            }
        }
    } else {
        for (j = 0; j < cart.length; j++) {
            // Check for duplicate
            if (cart[j].id === id) {
                cart[j].quantity++;
                repeated = true;
                break;
            } else {
                repeated = false;
            }
        }

        if (!repeated) {
            products[id - 1].quantity = 1;
            cart.push(products[id - 1]);
        }
    }
    
    cProduct()
    applyPromotionsCart();
}

// Exercise 9
function removeFromCart(id) {
    let i;

    for (i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].quantity--;
        }
        if (cart[i].quantity == 0) {
            cart.splice(cart[i], 1);
        }
    }

    cProduct()
    applyPromotionsCart();
}

function cProduct() {
    let countProduct = 0;

    for (let i = 0; i < cart.length; i++) {
        countProduct += cart[i].quantity;
    }

    document.getElementById("count_product").innerHTML = countProduct;
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}