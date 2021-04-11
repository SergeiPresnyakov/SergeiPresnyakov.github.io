const buttons = document.querySelectorAll('.pressable');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Button pressed');
    });
});

function activateProductCard(card) {
    let plusButton = card.querySelector('.fa-plus-circle');
    let minusButton = card.querySelector('.fa-minus-circle');
    let valueField = card.querySelector('span');
    let value = parseInt(valueField.innerHTML);

    plusButton.addEventListener('click', () => {
        value++;
        valueField.innerHTML = value;
    });

    minusButton.addEventListener('click', () => {
        value--;
        valueField.innerHTML = value;
    })
}

const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card) => {
    activateProductCard(card);
});
