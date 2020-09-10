const qsall = el => document.querySelectorAll(el);
const qs = el => document.querySelector(el);

// const slide =_=> {
//     const mainSlide = qs('.mainSlide');
//     const slideLength = mainSlide.children.length;
//     const slideWidth = 1030;

//         let counter = 1;
//         setInterval(()=>{
//             counter = (counter + 1) % slideLength;
//             mainSlide.style.transform = 'translateX('+ (-slideWidth * counter) + 'px)';}
//         ,3000);
// }

// window.addEventListener('load', slide());
const prevBtn = qs('.mainSlidePrevBtn');
const nextBtn = qs('.mainSlideNextBtn');


class createSlider {
    constructor(wrapper,width){
        this.wrapper = wrapper;
        this.width = width;
    }
    Slider(isAuto,duration){
        const wrapper = qs(this.wrapper);
        const length = wrapper.children.length;
        if(isAuto){
            let counter = 1;
        setInterval(()=>{
            counter = (counter + 1) % length;
            wrapper.style.transform = 'translateX('+ (-this.width * counter) + 'px)';}
        ,duration);
        }
        window.addEventListener('load', this.Slider);
    }
}

const mainSlide = new createSlider('.mainSlide',1030);
mainSlide.Slider(true,1500);

// nextBtn.addEventListener('click', ()=> {
//     if(counter >= mainSlideImages.length -1) return;
//     counter++;
//     mainSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
// });

// prevBtn.addEventListener('click', ()=>{
//     if(counter <= 0) return;
//     counter--;
//     mainSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
// });

// mainSlide.addEventListener('transitioned', ()=> {
//     if(mainSlideImages[counter].id === 'lastClone')
// });





