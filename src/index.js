import "./style.css";
import "./homePage.css";
import "./menuPage.css";
import "./contactsPage.css";
import { initialPageLoadFunction } from "./initialPageLoad";
import { homePageFunction } from "./homePage";
import { menuPageFunction } from "./menuPage";
import { contactsPageFunction } from "./contactsPage";

let homeButtonPressed = false;
let menuButtonPressed = false;
let contactsButtonPressed = false;

initialPageLoadFunction();
homePageFunction();
homeButtonPressed = true;

let homeButton = document.querySelector("#homeButton");
homeButton.addEventListener("click", (e) => {
  if (!homeButtonPressed) {
    if (menuButtonPressed) {
      document.querySelector("#menuContainer").remove();
      menuButtonPressed = false;
    }
    if (contactsButtonPressed) {
      document.querySelector("#contactsContainer").remove();
      contactsButtonPressed = false;
    }
    homePageFunction();
    homeButtonPressed = true;
  } else {
    return;
  }
});

let menuButton = document.querySelector("#menuButton");
menuButton.addEventListener("click", (e) => {
  if (!menuButtonPressed) {
    if (contactsButtonPressed) {
      document.querySelector("#contactsContainer").remove();
      contactsButtonPressed = false;
    }
    if (homeButtonPressed) {
      document.querySelector("#homeContainer").remove();
      homeButtonPressed = false;
    }
    menuPageFunction();
    menuButtonPressed = true;
  } else {
    return;
  }
});

let contactsButton = document.querySelector("#contactsButton");
contactsButton.addEventListener("click", (e) => {
  if (!contactsButtonPressed) {
    if (menuButtonPressed) {
      document.querySelector("#menuContainer").remove();
      menuButtonPressed = false;
    }
    if (homeButtonPressed) {
      document.querySelector("#homeContainer").remove();
      homeButtonPressed = false;
    }
    contactsPageFunction();
    contactsButtonPressed = true;
  } else {
    return;
  }
});
