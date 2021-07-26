function homePageFunction() {
  let homeContainer = document.createElement("div");
  homeContainer.id = "homeContainer";

  let homeContainerImg = document.createElement("div");
  homeContainerImg.id = "homeContainerImg";
  homeContainer.appendChild(homeContainerImg);

  let homeContainerImgIcon = document.createElement("img");
  homeContainerImgIcon.id = "homeContainerImgIcon";
  homeContainerImgIcon.src =
    "http://ibankcoin.com/chessnwine/files/2014/07/181b_breaking_bad_apron_closeup.jpg";
  homeContainerImg.appendChild(homeContainerImgIcon);

  let homeContainerText = document.createElement("div");
  homeContainerText.id = "homeContainerText";
  homeContainerText.textContent = `The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don't take my word for it. One taste, and you'll know.`;
  homeContainer.appendChild(homeContainerText);

  let main = document.querySelector("#main");
  main.appendChild(homeContainer);
}

export { homePageFunction };
