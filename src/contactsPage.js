function contactsPageFunction() {
  let contactsContainer = document.createElement("div");
  contactsContainer.id = "contactsContainer";
  let main = document.querySelector("#main");
  main.appendChild(contactsContainer);
}

export { contactsPageFunction };
