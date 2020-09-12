const qsall = (el) => document.querySelectorAll(el);
const qs = (el) => document.querySelector(el);
const money = (numb) => numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const tagClass = (tag, classname, init) => {
  const makeTag = document.createElement(tag);
  makeTag.className = classname;
  if (init) makeTag.innerHTML = init;
  return makeTag;
};

export { qsall, qs, money, tagClass };
