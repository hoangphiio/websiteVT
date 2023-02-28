import popupModule from "./modules/popupModule.js";
import burgerMenuModule from "./modules/burgerMenuModule.js";
import aosModule from "./modules/aosModule.js";
import searchModule from "./modules/searchModule.js";
import swiperModule from "./modules/swiperModule.js";
import tablistModule from "./modules/tablistModule.js";
import videoModule from "./modules/videoModule.js";
import dropdownModule from "./modules/dropdownModule.js";
import scrollModules from "./modules/scrollModules.js";
import navigationModule from "./modules/navigationModule.js";

window.addEventListener("DOMContentLoaded", () => {
  popupModule();
  burgerMenuModule();
  aosModule();
  searchModule();
  swiperModule();
  tablistModule();
  videoModule();
  dropdownModule();
  scrollModules();
  navigationModule();
});
