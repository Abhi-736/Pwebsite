const navItem= document.querySelectorAll('.navbar-nav .nav-item')
navItem.forEach((element)=>{element.addEventListener('click',()=>{
    this.classList.toggle('active')
   
})})

const types =new Typed(".input",{
    strings:["Frontend Developer", 'Web Developer'],
    typeSpeed:70,
    backSpeed:55,
    loop:true
})