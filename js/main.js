const qsall = (el) => document.querySelectorAll(el);
const qs = (el) => document.querySelector(el);
class createSlider {
  constructor(wrap, width) {
    this.wrapper = wrap;
    this.width = width;
  }

  Slider(isAuto, duration) {
    let counter = 1;
    const wrapper = qs(this.wrapper);
    const length = wrapper.children.length;
    const prevBtn = qs('.mainSlidePrevBtn');
    const nextBtn = qs('.mainSlideNextBtn');
    const sliding = (direction) => {
      counter = (counter + direction) % length;
      wrapper.style.transform = 'translateX(' + -this.width * counter + 'px)';
      console.log(counter);
    };

    if (isAuto) {
      setInterval(sliding(1), duration);
    }

    nextBtn.addEventListener('click', () => {
      if (counter == length - 1) return;
      sliding(1);
    });

    prevBtn.addEventListener('click', () => {
      if (counter == 0) return;
      sliding(-1);
    });

    window.addEventListener('load', this.Slider);
  }
}

const mainSlide = new createSlider('.mainSlide', 1030);
mainSlide.Slider(true, 2500);
