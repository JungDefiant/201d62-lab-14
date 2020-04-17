/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');

var cart = [];


function loadCart() {
    var cartItems = JSON.parse(localStorage.getItem('cartString')) || [];

    var cartCart = new Product(cartItems);
    cart.push(cartCart);
    console.log(cartCart);
    // console.log(cartItems);
    // console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
    loadCart();
    clearCart();
    showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

    var cartItems = document.getElementById('cart').getElementsByTagName('tbody');
    cartItems.innerHTML = '';

}




// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

    var tableRowTarget = document.getElementById('cart').getElementsByTagName('tbody');

    for (var i = 0; i < cart.length; i++) {
        var newTrow = document.createElement('tr');
        var deleteLinkEl = document.createElement('td');
        deleteLinkEl.itemIndex = i;
        deleteLinkEl.textContent = 'X';
        deleteLinkEl.addEventListener('click', removeItemFromCart);

        var picturEl = document.createElement('td');
        //TODO: still needs Content FIXME:
        var itemNameEl = document.createElement('td');
        var quantityEl = document.createElement('td');
        newTrow.appendChild(deleteLinkEl);
        // newTrow.appendChild(picturEl);
        // newTrow.appendChild(itemNameEl);
        // newTrow.appendChild(quantityEl);

        tableRowTarget[i].appendChild(newTrow);


    }
}

function removeItemFromCart(event) {
    event.preventDefault();
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    //Target = Delete Link in each instance of <tr>
    var toDelete = event.target.parentElement;
    toDelete.remove();
    cartCart.removeItem(event.target.itemIndex);
    cart.saveToLocalStorage();
    showCart();
    // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();