// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
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
        offer: {
            number: 10,
            percent: 30
        }
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
    // La funció que has de completar es diu buy(), la qual rep l'id del producte a afegir. Has de buscar el producte utilitzant aquest id rebut a l'array products, per finalment afegir-ho al array cartList. Els botons que han d'executar la funció buy() són els blaus que es troben en cada producte. Ajuda: per a buscar el producte a l'array products mitjançant l'id, pots utilitzar un bucle for.
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i]);
            i++;
        }
    }
    console.log("productos añadidos a cartList debajo:");
    console.log(cartList);
}

// Exercise 2
function cleanCart() {
    // Ara implementarem una funció que permeti a l'usuari/ària eliminar l'array generat a l'anterior exercici: buidar el carret. En aquest cas, hauràs d'emplenar la funció cleanCart(), la qual ha de reinicialitzar la variable cartList.
    cartList = [];
    console.log("cartList vacía " + cartList);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    //Genial, l'e-commerce va prenent forma!, és el moment de calcular el total de l'import del carretó. S'ha d'implementar un bucle for per anar sumant l'import de tots els productes.
    // let prices = 0;
    for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price;
    }
    return console.log("precio total de la suma de productos: " + total);
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
        }

        if (repeated == false && i != 0) {
            cartList[i].quantity = 1;
            cart.push(cartList[i]);
        }
    }
    console.log(cart);
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}