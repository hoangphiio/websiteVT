import popupModule from "./modules/popupModule.js";
import burgerMenuModule from "./modules/burgerMenuModule.js";
import navigationModule from "./modules/navigationModule.js";
import aosModule from "./modules/aosModule.js";
import searchModule from "./modules/searchModule.js";
import swiperModule from "./modules/swiperModule.js";
import tablistModule from "./modules/tablistModule.js";
import videoModule from "./modules/videoModule.js";

window.addEventListener("DOMContentLoaded", () => {
  popupModule();
  burgerMenuModule();
  navigationModule();
  aosModule();
  searchModule();
  swiperModule();
  tablistModule();
  videoModule();
});
