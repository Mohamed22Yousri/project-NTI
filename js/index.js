let navLinks = document.querySelectorAll(".nav_link")


navLinks.forEach(nav => {
    nav.addEventListener('click' , () => {
            document.querySelector('.active1')?.classList.remove('active1')
            nav.classList.add('active1')
    })
})


function scrolTop() {
    window.scrollTo(0,0)
}


let nums = document.querySelectorAll('.counter-text .num')
let section = document.querySelector('.scroll')
let started = false
  


window.onscroll = function () {
    if(window.scrollY >= section.offsetTop) {
        if(!started) {
            nums.forEach((num) => setCount(num))

        }
        started = true

    }
}

function setCount(el) {
    let goal = el.dataset.goal
    let conut = setInterval(() => {
            el.textContent++
            if(el.textContent == goal){
                clearInterval(conut)
        
            }
         
    }, 2000 / goal)
    
}

//swiper

const swiper = new Swiper('.cards', {
    grabCursor: true,
    spaceBetween:30,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
        clickable:true,
      },
      breakpoints: {
        992:{
            slidesPerView:2
        }
      }
});


