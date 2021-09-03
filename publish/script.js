
const body = document.body
const theme = localStorage.getItem("theme")

if( theme ) {
    body.classList.value = theme 
} else {
    localStorage.setItem('theme', 'light');
    body.classList.value =  'light' 
}

// localStorage.setItem('theme', 'light');
// body.classList.value =  'light' ;

var metaThemeColor = document.querySelector("meta[name=theme-color]");
metaThemeColor.setAttribute("content", "#eeeeee");


function switchTheme() {
   if( localStorage.getItem("theme") == 'dark' ){
      localStorage.setItem("theme", 'light')
   } else {
      localStorage.setItem("theme", 'dark')
   }

   body.classList.value =  localStorage.getItem("theme");
}


// function getRandomRGBValue() {
//     return Math.min(Math.floor(Math.random() * 255 + 1), 255);
// }

// function getRandomColor() {
//     var r = getRandomRGBValue(),
//         g = getRandomRGBValue(),
//         b = getRandomRGBValue();
//     return "#" + (((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
// }

// function changeThemeColor() {
//     var metaThemeColor = document.querySelector("meta[name=theme-color]");
//     metaThemeColor.setAttribute("content", getRandomColor());
//     setTimeout(function() {
//         changeThemeColor();
//     }, 3000);
// }

// changeThemeColor();
