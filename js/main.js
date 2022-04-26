function extraCost(price, extraCostId) {
    const extraCost = document.getElementById(extraCostId);
    extraCost.innerText = price;
    calculateTotal();
}

function getCost(cost) {
    const extraCost = document.getElementById(cost).innerText;
    return extraCost;
}