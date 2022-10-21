const hiddenMenu = (triggerSelector, menuSelector, closeSelector) => {
  const trigger = document.querySelector(triggerSelector),
    menu = document.querySelector(menuSelector),
    closeBtn = document.querySelector(closeSelector);

  function openMenu() {
    menu.classList.add("header-hidden-menu-active");
  }

  function closeMenu() {
    menu.classList.remove("header-hidden-menu-active");
  }

  trigger.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  window.addEventListener("resize", closeMenu);

  Object.values(menu.children).forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
};

export default hiddenMenu;
