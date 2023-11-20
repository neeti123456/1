let menu = document.querySelector('#menu-btn');
let navbar=document.querySelector('.header .navbar');

menu.onclick=()=>{
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
};
window.onscroll=()=>{
    menu.classList.remove('fa-time');
    navbar.classList.remove('active');
};
var swiper=new swiper(".home-slider",{
    loop:true,
   navigation:{
    nextE1:".swiper-button-next",
    prevE1:".swiper-button-prev",
   },
});
var swiper=new swiper(".reviews-slider",{
    loop:true,
    spacebetween:20,
    autoHeight:true,
    grabCursor:true,
    breakpoints:{
        640:{
            slidesPerview:1,
        },
        768:{
            slidesPerview:2,

        },
        1024:{
            slidesPerview:3,
        },
    },
});
let loadMoreBtn=document.querySelector('.packages .load-more .btn');
let currentItem=3;
loadMoreBtn.onclick=() =>{
 let boxes=[...document.querySelectorAll('.packages .box-container .box')];
for (var i=currentItem; i<currentItem +3; i++){
    boxes[i].computedStyleMap.display='inline-block';
};
currentItem +=3;
if(currentItem>=boxes.length){
    loadMoreBtn.computedStyleMap.display='none';
}


}
