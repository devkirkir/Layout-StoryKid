import dropdownMenu from "./modules/dropdownMenu.js";
import forms from "./modules/forms.js";
import hiddenMenu from "./modules/hiddenMenu.js";
import loader from "./modules/loader.js";
import modals from "./modules/modals.js";
import phoneValid from "./modules/phoneValid.js";
import slider from "./modules/slider.js";

window.onload = () => {
    loader(".loader");
};

window.addEventListener("DOMContentLoaded", () => {
    dropdownMenu();
    hiddenMenu(".burger", ".header-hidden-menu", ".hidden-menu-close-btn");
    modals();
    forms();
    phoneValid();
    slider();
});
