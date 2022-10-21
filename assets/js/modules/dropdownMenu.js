const dropdownMenu = () => {
  function bindDropdown(triggerSelector, dropdown) {
    const listDropdown = document.querySelectorAll(".header-dropdown"),
      link = document.querySelector(triggerSelector),
      activeLinks = document.querySelectorAll(".navigation-link");

    function closeAll() {
      listDropdown.forEach((item) => {
        item.classList.remove("header-navigation-dropdown-active");
      });

      activeLinks.forEach((item) => {
        item.classList.remove("nav-active");
      });
    }

    function toggleDropdown() {
      let dropdownSelector = document.querySelector(dropdown);

      animation(dropdownSelector);

      if (
        !dropdownSelector.classList.contains(
          "header-navigation-dropdown-active"
        )
      ) {
        closeAll();
        dropdownSelector.classList.add("header-navigation-dropdown-active");
        link.classList.add("nav-active");
      } else {
        dropdownSelector.classList.remove("header-navigation-dropdown-active");
        closeAll();
      }
    }

    function animation(elem) {
      elem.animate(
        [
          {
            opacity: 0,
          },
          { opacity: 1 },
        ],
        {
          duration: 300,
        }
      );
    }

    link.addEventListener("click", () => toggleDropdown());
    window.addEventListener("resize", closeAll);
  }

  bindDropdown(".nav-about", ".header-navigation-dropdown-about");
  bindDropdown(".nav-schedule", ".header-navigation-dropdown-schedule");
  bindDropdown(".nav-program", ".header-navigation-dropdown-program");
};

export default dropdownMenu;
