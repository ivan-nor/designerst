const headerSubmenues = document.querySelectorAll('.header__submenu')
console.log('headerSubmenues :>> ', headerSubmenues);
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