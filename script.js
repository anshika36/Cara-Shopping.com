// to make the humburger menu clickable 

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
//this is used to close button clickable
const close = document.getElementById('close');

// => this is used to qrun the humburger menu and bar and navbar is the id 

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
// this is for to clickthe close option then humburger menu is closed.
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}