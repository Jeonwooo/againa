const qsall = (el) => document.querySelectorAll(el);
const qs = (el) => document.querySelector(el);
const money = (numb) => numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const tagClass = (tag, classname, init) => {
  const makeTag = document.createElement(tag);
  makeTag.className = classname;
  if (init) makeTag.innerHTML = init;
  return makeTag;
};

qs('.globalSearch').addEventListener('focus', () => {
  qs('.keywordBox').style.display = 'block';
});
qs('.globalSearch').addEventListener('blur', () => {
  qs('.keywordBox').style.display = 'none';
});
//qs('.burgerIcon')

class CreateSlider {
  constructor(wrap, width) {
    this.wrapper = wrap;
    this.width = width;
  }

  Slider(isAuto, isBtn, duration) {
    let counter = 0;
    // const prevBtn = qs('.mainSlidePrevBtn');
    // const nextBtn = qs('.mainSlideNextBtn');
    const sliding = (direction) => {
      counter = (counter + direction) % qs(this.wrapper).children.length;
      qs(this.wrapper).style.transform = `translateX(${-this.width * counter}px)`;
    };

    if (isAuto) {
      setInterval(sliding(1), duration);
    }

    if (isBtn) {
      const prev = tagClass('button', 'prevBtn');
      const next = tagClass('button', 'nextBtn');
      qs(this.wrapper).parentNode.appendChild(prev);
      qs(this.wrapper).parentNode.appendChild(next);
      next.addEventListener('click', () => {
        if (counter === qs(this.wrapper).children.length - 1) return;
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

const mainSlide = new CreateSlider('.mainSlide', 1030);
mainSlide.Slider(true, true, 2500);

const recommendSlide = new CreateSlider('.recommendedItemSlide .slideList', 1040);
recommendSlide.Slider(false, true, 2500);

const recommendedItemList = [
  {
    itemName: '카야잼 스위트',
    itemPrice: 52500,
    itemImage: './db/item/img/2.jpg',
    itemUpdated: '3시간 전',
    freeShipping: true,
  },
  {
    itemName: '쓰다 남긴 크레파스',
    itemPrice: 8000,
    itemImage: './db/item/img/2.jpg',
    itemUpdated: '5시간 전',
    freeShipping: false,
  },
  {
    itemName: '카야잼 스위트',
    itemPrice: 52500,
    itemImage: './db/item/img/2.jpg',
    itemUpdated: '3시간 전',
    freeShipping: true,
  },
  {
    itemName: '쓰다 남긴 크레파스',
    itemPrice: 8000,
    itemImage: './db/item/img/2.jpg',
    itemUpdated: '5시간 전',
    freeShipping: false,
  },
  {
    itemName: '카야잼 스위트',
    itemPrice: 52500,
    itemImage: './db/item/img/2.jpg',
    itemUpdated: '3시간 전',
    freeShipping: true,
  },
  {
    itemName: '쓰다 남긴 크레파스',
    itemPrice: 8000,
    itemImage: './db/item/img/2.jpg',
    itemUpdated: '5시간 전',
    freeShipping: false,
  },
];

recommendedItemList.forEach((elem) => {
  const itemImage = tagClass('div', 'itemImage', `<img src="${elem.itemImage}" alt="상품 이미지" />`);
  const itemName = tagClass('div', 'itemName', elem.itemName);
  const itemIcon = tagClass('div', 'itemIcon', elem.freeShipping ? '무료배송' : '');
  const itemPrice = tagClass('div', 'itemPrice', money(elem.itemPrice));
  const itemUpdated = tagClass('div', 'itemUpdated', elem.itemUpdated);
  const itemDetail = tagClass('div', 'itemDetail');
  const itemInfo = tagClass('div', 'itemInfo');
  const slideItemLink = tagClass('a', 'slideItemLink');
  const slideItem = tagClass('div', 'slideItem');
  itemDetail.appendChild(itemPrice);
  itemDetail.appendChild(itemUpdated);
  itemInfo.appendChild(itemName);
  itemInfo.appendChild(itemIcon);
  itemInfo.appendChild(itemDetail);
  slideItemLink.appendChild(itemImage);
  slideItemLink.appendChild(itemInfo);
  slideItem.appendChild(slideItemLink);
  qs('.recommendedItemSlide .slideList').appendChild(slideItem);
});
