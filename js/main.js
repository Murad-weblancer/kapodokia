const burger = document.querySelector('.burger');
const list = document.querySelector('.navbar__list')
burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    list.classList.toggle('active');
})
const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  loop:true
});
const anchors = document.querySelectorAll('a[href*="#"]');
for(let anchor of anchors){
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const blockId = anchor.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
