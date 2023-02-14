let string = '';
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelectorAll('input').value = string;
    })
})