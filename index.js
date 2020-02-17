const btnmenu= document.getElementById('btnmenu')
const closemenu = document.getElementById('closemenu')
const bars = document.getElementById('bars')

btnmenu.addEventListener('click', function(){
    
    bars.classList.add('menu_open')
})

closemenu.addEventListener('click', function(){
    bars.classList.remove('menu_open')
})

