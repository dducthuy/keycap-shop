// script.js
document.addEventListener('DOMContentLoaded', () => {
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const quantityInput = document.getElementById('quantity');
    const unitPrice = 1000000; // Unit price in your currency, for example, 1.000.000đ
    const totalPriceElement = document.querySelector('.total-price .t-price span');


    const updateTotalPrice = (quantity) => {
        const totalPrice = unitPrice * quantity;
        totalPriceElement.textContent = `${totalPrice.toLocaleString('vi-VN')}đ`;
    };

    decreaseButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
            updateTotalPrice(currentValue - 1);
        }
    });

    increaseButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
        updateTotalPrice(currentValue + 1);
    });


    updateTotalPrice(parseInt(quantityInput.value));



    // xóa sp





});

