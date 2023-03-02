const textarea = document.getElementById('text');
const background = document.querySelector('body');

textarea.addEventListener('input', () => {
    localStorage.setItem('text', textarea.value);
});

background.style.backgroundImage = 'url("https://www.cleanpng.com/png-blue-loose-leaf-notebook-26626/preview.html")';

if (localStorage.getItem('text')) {
    textarea.value = localStorage.getItem('text');
}
