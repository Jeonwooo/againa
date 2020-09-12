import { qs, money, tagClass } from './common.js';
import CreateSlider from './slider.js';
import { categoryTabs, categoryItemListWoman, recommendedItemList } from '../db/itemlist.js';

const keywordBox = qs('.keywordBox');
let keywordBoxhover = true;
qs('.globalSearch').addEventListener('focus', () => {
  keywordBox.style.display = 'block';
});
qs('.globalSearch').addEventListener('blur', () => {
  if (keywordBoxhover) return;
  keywordBox.style.display = 'none';
});
qs('.keywordBox').addEventListener('mouseover', () => {
  keywordBoxhover = true;
  console.log(keywordBoxhover);
});
qs('.keywordBox').addEventListener('mouseout', () => {
  keywordBoxhover = false;
  console.log(keywordBoxhover);
});

const mainSlide = new CreateSlider('.mainSlide', 1030, true, true, 2500, 4);
mainSlide.Slider();

const recommendSlide = new CreateSlider('.recommendedItemSlide .slideList', 1040, false, true, 2500, 3);
recommendSlide.Slider();

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

let categoryTabNow = 0;

categoryTabs.forEach((elem) => {
  const categoryBtn = tagClass('button', 'categoryBtn', elem);
  const categoryEach = tagClass('div', 'categoryEach');
  categoryEach.appendChild(categoryBtn);
  qs('.categoryHotTabs .categoryList').appendChild(categoryEach);
  categoryBtn.addEventListener('click', () => {
    // qsall('.categoryBtn').classList.remove('btnActive');
    // categoryBtn.classList.add('btnActive');
  });
});

categoryItemListWoman.forEach((elem) => {
  const itemPrice = tagClass('div', 'itemPrice', elem.itemPrice);
  const itemUpdated = tagClass('div', 'itemUpdated', elem.itemUpdated);
  const categoryItemDetail = tagClass('div', 'categoryItemDetail');
  const categoryItemName = tagClass('div', 'categoryItemName', elem.itemName);
  const categoryItemInfo = tagClass('div', 'categoryItemInfo');
  const categoryItemThumb = tagClass('div', 'categoryItemThumb', `<img src="${elem.itemImage}" alt="상품 이미지" />`);
  const categoryLink = tagClass('a', 'categoryLink');
  const categoryItem = tagClass('div', 'categoryItem');
  categoryItemDetail.appendChild(itemPrice);
  categoryItemDetail.appendChild(itemUpdated);
  categoryItemInfo.appendChild(categoryItemName);
  categoryItemInfo.appendChild(categoryItemDetail);
  categoryLink.appendChild(categoryItemThumb);
  categoryLink.appendChild(categoryItemInfo);
  categoryItem.appendChild(categoryLink);
  qs('.categoryItemsContainer').appendChild(categoryItem);
});
