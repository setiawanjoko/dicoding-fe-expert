import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

document.querySelector('#nav_drawer').addEventListener('click', function() {
    const mainNav = document.querySelector('nav ul')
    const classes = mainNav.classList
    classes.toggle('hidden')
})