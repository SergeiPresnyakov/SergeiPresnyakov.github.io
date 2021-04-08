const buttons = document.querySelectorAll('.pressable');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Button pressed');
    });
});