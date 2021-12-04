window.onload = () => {
    let body = document.body

    if( localStorage.getItem("theme") ) {
        body.classList.value = localStorage.getItem("theme")
    } else {
        localStorage.setItem('theme', 'light');
        body.classList.value =  'light' 
    }
};

function switchTheme() {
    let body = document.body;
    
    if( localStorage.getItem("theme") == 'dark' ){
        localStorage.setItem("theme", 'light')
    } else {
        localStorage.setItem("theme", 'dark')
    }

    body.classList.value =  localStorage.getItem("theme");
}
