function initialPageLoadFunction() {
  let mainContainer = document.createElement("div");
  mainContainer.id = "content";

  let nav = document.createElement("nav");
  nav.id = "nav";
  let navPoster = document.createElement("div");
  navPoster.id = "navPoster";
  nav.appendChild(navPoster);
  let navBar = document.createElement("div");
  navBar.id = "navBar";
  nav.appendChild(navBar);

  let navPosterImg = document.createElement("div");
  navPosterImg.id = "navPosterImg";
  navPosterImg.textContent = "LOS POLLOS HERMANOS";
  navPoster.appendChild(navPosterImg);

  let homeButton = document.createElement("button");
  homeButton.id = "homeButton";
  homeButton.className = "navBarButtons";
  homeButton.textContent = "Home";
  navBar.appendChild(homeButton);
  let menuButton = document.createElement("button");
  menuButton.id = "menuButton";
  menuButton.className = "navBarButtons";
  menuButton.textContent = "Menu";
  navBar.appendChild(menuButton);
  let contactsButton = document.createElement("button");
  contactsButton.id = "contactsButton";
  contactsButton.className = "navBarButtons";
  contactsButton.textContent = "Contacts";
  navBar.appendChild(contactsButton);

  let main = document.createElement("main");
  main.id = "main";
  let footer = document.createElement("footer");
  footer.id = "footer";
  footer.textContent = "Made for the business, by Aktan Zhakypbekov";

  mainContainer.appendChild(nav);
  mainContainer.appendChild(main);
  mainContainer.appendChild(footer);
  document.body.appendChild(mainContainer);
}

export { initialPageLoadFunction };
