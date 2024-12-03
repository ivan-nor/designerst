// выпадающий список в меню при наведении
const headerSubmenues = document.querySelectorAll('.header__submenu')
// console.log('headerSubmenues :>> ', headerSubmenues);
for (const headerSubmenu of headerSubmenues) {
  headerSubmenu.addEventListener("mouseenter", (e) => {
    console.log(e.target);
    const subDropdownList = headerSubmenu.querySelector('.header__submenu-list')
    subDropdownList.classList.remove('hide');
  });
  headerSubmenu.addEventListener("mouseleave", (e) => {
    console.log(e.target);
    const subDropdownList = headerSubmenu.querySelector('.header__submenu-list')
    subDropdownList.classList.add('hide');
  });
}

// ВЫЧИСЛЕНИЕ ОТСТУПА MAIN
window.addEventListener('load', updateMainMargin);
window.addEventListener('resize', updateMainMargin);
function updateMainMargin() {
  const headerHeight = document.querySelector('header').offsetHeight;
  // const mainHeader = document.querySelector('.main-header');
  // const subHeaderHeight = subHeader.offsetHeight
  // const mainHeaderHeadHeight = mainHeaderHead.offsetHeight
  // const paddingHeight = subHeader.offsetHeight + mainHeaderHead.offsetHeight;
  // console.log(mainHeader, subHeaderHeight, mainHeaderHeadHeight, paddingHeight);
  const paddingHeight = headerHeight
  document.querySelector('main').style.paddingTop = `${paddingHeight}px`;
}