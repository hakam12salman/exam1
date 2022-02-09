function clearAll() {
    document.getElementsByClassName('shopping-cart')[0].getElementsByTagName('tbody')[0].innerHTML = ''
}


function deleteItem(e) {
    e.parentNode.parentNode.remove()
    calculateTotals()
}


function calculateItems() {
    for (var i = 0; i < document.getElementsByClassName('FormCountrol').length; i++) {
        if (document.getElementsByClassName('FormCountrol')[i].id != 'txtdiscount') {
            var count = document.getElementsByClassName('FormCountrol')[i].value
            var price = document.getElementsByClassName('ItemUnitPrice')[i].innerHTML
            var total = count * price
            document.getElementsByClassName('ItemSubTotal')[i].innerHTML = total
        }
    }
    calculateTotals()
}

function calculateTotals() {
    var subtotal = 0
    for (var i = 0; i < document.getElementsByClassName('ItemSubTotal').length; i++) {
        subtotal += parseFloat(document.getElementsByClassName('ItemSubTotal')[i].innerHTML)
    }

    var discount = document.getElementById('txtdiscount').value
    var discountAmount = subtotal * (discount / 100)
    var total = subtotal - discountAmount
    document.getElementById('subtotal').innerHTML = subtotal
    document.getElementById('total').innerHTML = total
}