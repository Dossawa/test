const body = document.querySelector('body')
const toggle = document.querySelector('.toggle')

toggle.addEventListener("click", function(){
    if(body.classList.contains('open')){
        body.classList.remove('open')
    } else{
        body.classList.add('open')
    }
})