let aside = document.querySelector('aside');
document.querySelector('#menu_toggle').addEventListener('click', ()=>{
    aside.classList.toggle('test');
});

let btn = document.querySelector('.menu_icon');
let html = document.documentElement;

btn.addEventListener('click', ()=>{
    html.classList.toggle('dark');
    
    if(html.classList.contains('dark')){
        btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('mode','dark');
    }else{
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.removeItem('mode');
    }
});

if(localStorage.getItem('mode') == 'dark'){
    html.classList.add('dark');
}