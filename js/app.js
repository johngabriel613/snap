const link = document.querySelectorAll('.js-link')

function activeState(i){
    if(link[i].classList.contains('active')){
        link[i].classList.remove('active')
    }else{
        link[i].classList.add('active')
    }

    if(i > 0){
        link[i - 1].classList.remove('active')
    }else{
        link[i + 1].classList.remove('active')
    }
}

const nav = document.querySelector('.js-nav')

function openNav(){
    nav.classList.add('active')
}

function closeNav(){
    nav.classList.remove('active')
}