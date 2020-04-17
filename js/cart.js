/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');

var cart;

function loadCart() {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
    loadCart();
    clearCart();
    showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

    var tableRowTarget = document.getElementById('cart').getElementsByTagName('tbody');

    for (var i = 0; i < cart.items.length; i++) {
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
        newTrow.appendChild(picturEl);
        newTrow.appendChild(itemNameEl);
        newTrow.appendChild(quantityEl);

        tableRowTarget[0].appendChild(newTrow);


    }
}

function removeItemFromCart(event) {

    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    //Target = Delete Link in each instance of <tr>
    var toDelete = event.target.parentElement;
    toDelete.remove();
    cart.removeItem(event.target.itemIndex);

    // TODO: Save the cart back to local storage
    // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();