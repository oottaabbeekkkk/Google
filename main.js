let btn = document.querySelector('.div');
let div = document.querySelector('.javascript');
let x = document.querySelector('.x')

btn.addEventListener('click', () => {
    div.classList.add('show')
})

x.addEventListener('click', () => {
    div.classList.remove('show')
})