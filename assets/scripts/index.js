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

// ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК
const projectsTabButtons = document.querySelectorAll('#projects__tabs-switcher button')
const projectsTabPanels = document.querySelectorAll('.projects__tabpanel')
for (const tab of projectsTabButtons) {
  tab.addEventListener('click', (e) => {
    for (const tabEl of projectsTabButtons) {
      tabEl.setAttribute('aria-selected', 'false')
    }

    for (const tabpanel of projectsTabPanels) {
      tabpanel.classList.remove('active')
    }

    const activeTabElement = document.querySelector('#projects__tabs-switcher button[tabindex="0"]')
    const activeTabId = activeTabElement.id
    const activeTabControls = tab.getAttribute('aria-controls')
    const tabPanel = document.getElementById(activeTabControls);

    tabPanel.classList.add('active')
    
    if (e.target.id !== activeTabId) {
      activeTabElement.setAttribute('tabindex', '-1')
      activeTabElement.setAttribute('aria-selected', 'false')
      e.target.setAttribute('tabindex', '0')
      e.target.setAttribute('aria-selected', 'true')
    }

    console.log('tab, tabpanel, activeTabElemennt :>> ', tab, tabPanel, activeTabElement, e.target);
  })
}

// РАСКРАШИВАНИЕ ЗВЕЗД РЕЙТИНГА
const reviewsRatings = document.querySelectorAll('.reviews__card-rating')
for (const rating of reviewsRatings) {
  const value = rating.getAttribute('data-rating')
  const stars = rating.querySelectorAll('.reviews__card-star')
  // console.log(rating, value, stars);

  for (star of stars) {
    const starNumber = star.getAttribute('data-star')
    const path = star.querySelector('path')
    // console.log(starNumber, path);

    if (value >= starNumber) {
      path.style.fill = "#F9F9FC"
    }
  }
}

// FAQ
const faqItems = document.querySelectorAll('.faq__item')
const faqItemDescriptions = document.querySelectorAll('.faq__item-description')
const faqButtons = document.querySelectorAll('.faq__item-button');

console.log(faqItems, faqItemDescriptions, faqButtons);
for (item of faqItems) {
  item.addEventListener('click', (e) => {
    const targetDescription = e.currentTarget.querySelector('.faq__item-description');

    for (element of faqItems) {
      const elButton = element.querySelector('.faq__item-button')
      const elDescription = element.querySelector('.faq__item-description')

      if (elDescription === targetDescription) {
        if (elDescription.classList.contains('hide')) {
          elButton.classList.add('rotate-180');
          elDescription.classList.remove('hide')
        } else {
          elButton.classList.remove('rotate-180');
          elDescription.classList.add('hide')
        }
      } else {
        elButton.classList.remove('rotate-180');
        elDescription.classList.add('hide')
      }
    }
  })
}
