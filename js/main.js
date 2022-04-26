function extraCost(price, extraCostId) {
    const extraCost = document.getElementById(extraCostId);
    extraCost.innerText = price;
    calculateTotal();
}

function getCost(cost) {
    const extraCost = document.getElementById(cost).innerText;
    return extraCost;
}

// calculate total price
function calculateTotal() {
    const extramemoryPrice = parseFloat(getCost('extra-memory-cost'));
    const extraStoragePrice = parseFloat(getCost('extra-storage-cost'));
    const deliveryCharge = parseFloat(getCost('delivery-charge'));
    const total = 1299 + extramemoryPrice + extraStoragePrice + deliveryCharge;
    document.getElementById('price-list-total-price').innerText = total;

    const finalTotalPrice = document.getElementById('final-total-price');
    finalTotalPrice.innerText = total;
    return finalTotalPrice.innerText;
}

// eventlistener for memory cost
document.getElementById('8gb-memory-btn').addEventListener('click', function () {
    extraCost(0, 'extra-memory-cost');
});
document.getElementById('16gb-memory-btn').addEventListener('click', function () {
    extraCost(180, 'extra-memory-cost');
});
// eventlistener for storage cost
document.getElementById('256gb-ssd-btn').addEventListener('click', function () {
    extraCost(0, 'extra-storage-cost');
});

document.getElementById('512gb-ssd-btn').addEventListener('click', function () {
    extraCost(100, 'extra-storage-cost');
});
document.getElementById('1tb-ssd-btn').addEventListener('click', function () {
    extraCost(180, 'extra-storage-cost');
});

// eventlistener for delivery charge
document.getElementById('free-delivery-btn').addEventListener('click', function () {
    extraCost(0, 'delivery-charge');
});
document.getElementById('charged-delivery-btn').addEventListener('click', function () {
    extraCost(20, 'delivery-charge');
});