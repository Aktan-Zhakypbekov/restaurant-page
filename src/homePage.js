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
  homeContainerText.textContent = `Best tasty chickens, with love, for you.
  Use our order service or bring your friends and family to have the best time in your life`;
  homeContainer.appendChild(homeContainerText);

  let main = document.querySelector("#main");
  main.appendChild(homeContainer);
}

export { homePageFunction };
