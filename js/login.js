let saveIDCheck = false;
let saveLoginCheck = false;

const saveID = document.querySelector('.saveID');
saveID.addEventListener('click', () => {
  saveIDCheck = (saveIDCheck + 1) % 2;
  saveID.classList.toggle('checked');
  console.log(saveIDCheck);
});
