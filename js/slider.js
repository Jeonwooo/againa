import { tagClass } from './common.js';

export default class CreateSlider {
  constructor(wrap, width, isAuto, isBtn, duration, length) {
    this.wrapper = wrap;
    this.width = width;
    this.isAuto = isAuto;
    this.isBtn = isBtn;
    this.duration = duration;
    this.length = length;
  }

  Slider() {
    let counter = 0;
    const wrapp = document.querySelector(this.wrapper);
    const sliding = (direction) => {
      counter = (counter + direction) % this.length;
      wrapp.style.transform = `translateX(${-this.width * counter}px)`;
    };

    if (this.isAuto) {
      setInterval(sliding, this.duration, 1);
    }
    if (this.isBtn) {
      const prev = tagClass('button', 'prevBtn');
      const next = tagClass('button', 'nextBtn');
      wrapp.parentNode.appendChild(prev);
      wrapp.parentNode.appendChild(next);
      next.addEventListener('click', () => {
        if (counter === this.length - 1) return;
        sliding(1);
      });
      prev.addEventListener('click', () => {
        if (counter === 0) return;
        sliding(-1);
      });
    }
    window.addEventListener('load', this.Slider);
  }
}
