const carouselItem = document.querySelector('.carousel-items');
const allItems = document.querySelectorAll('.carousel-item');


const buttonPrev = document.querySelector('.prev');
const buttonNext = document.querySelector('.next');

let visiblelItemI = 0;
const totalItems = allItems.length;



function updateCarousel() {
for (let i = 0; i < allItems.length; i++){
    allItems[i].classList.remove('active');
}
allItems[visiblelItemI].classList.add('active');

}




buttonPrev.addEventListener('click', () => {
    if(visiblelItemI > 0) {
        visiblelItemI--;
    } else{
        visiblelItemI = totalItems - 1;
    }
    updateCarousel()
})

buttonNext.addEventListener('click', () =>{
    if(visiblelItemI < totalItems -1){
        visiblelItemI++;
    }else{
        visiblelItemI = 0
    }
    updateCarousel()
})




