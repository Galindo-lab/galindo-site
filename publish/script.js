
const body = document.body
const theme = localStorage.getItem("theme")

if( theme ) {
    body.classList.value = theme 
} else {
    localStorage.setItem('theme', 'light');
    body.classList.value =  'light' 
}

localStorage.setItem('theme', 'light');
body.classList.value =  'light' ;
