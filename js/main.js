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