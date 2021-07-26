function contactsPageFunction() {
  let contactsContainer = document.createElement("div");
  contactsContainer.id = "contactsContainer";

  let contactsContainerContent = document.createElement("div");
  contactsContainerContent.id = "contactsContainerContent";

  let contactsContainerImgDiv = document.createElement("div");
  contactsContainerImgDiv.id = "contactsContainerImgDiv";
  let contactsContainerImg = document.createElement("img");
  contactsContainerImg.id = "contactsContainerImg";
  contactsContainerImg.src =
    "https://i1.wp.com/cocalecas.net/wp-content/uploads/2015/05/Breaking-Bad-Los-Pollos-Hermanos-podria-convertirse-en-un-restaurante-real_landscape.jpg";
  contactsContainerImgDiv.appendChild(contactsContainerImg);
  contactsContainerContent.appendChild(contactsContainerImgDiv);

  let contactsContainerInfo = document.createElement("div");
  contactsContainerInfo.id = "contactsContainerInfo";
  contactsContainerInfo.innerHTML = `<div>CEO: Gustavo Fring</div>
   <div>Manager: Gustavo Fring</div>
   <div>Branch Manager: Cynthia</div>
   <div>Assistant Manager: Lyle</div>
   <div>Physical Address: 4257 Isleta Boulevard Southwest Albuquerque, NM 87105</div>
   <div>Telephone Number: (505) 146-0195</div>`;

  contactsContainerContent.appendChild(contactsContainerInfo);
  contactsContainer.appendChild(contactsContainerContent);
  let main = document.querySelector("#main");
  main.appendChild(contactsContainer);
}

export { contactsPageFunction };
