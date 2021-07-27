function menuPageFunction() {
  let menuContainer = document.createElement("div");
  menuContainer.id = "menuContainer";

  let dish1 = document.createElement("div");
  dish1.className = "menuDishes";
  dish1.id = "dish1";
  let dish1Img = document.createElement("img");
  dish1Img.id = "dish1Img";
  dish1Img.src =
    "https://i.insider.com/56be399e2e526558008b7091?width=1000&format=jpeg&auto=webp";
  dish1.appendChild(dish1Img);
  menuContainer.appendChild(dish1);

  let dish2 = document.createElement("div");
  dish2.className = "menuDishes";
  dish2.id = "dish2";
  let dish2Img = document.createElement("img");
  dish2Img.id = "dish2Img";
  dish2Img.src =
    "https://www.hunterandbligh.com.au/wp-content/uploads/2017/04/P4110223-1-e1491890650427.jpg";
  dish2.appendChild(dish2Img);
  menuContainer.appendChild(dish2);

  let dish3 = document.createElement("div");
  dish3.className = "menuDishes";
  dish3.id = "dish3";
  let dish3Img = document.createElement("img");
  dish3Img.id = "dish3Img";
  dish3Img.src =
    "https://beinthecut.com/wp-content/uploads/2017/04/chicken-los-pollos-hermanos.jpg";
  dish3.appendChild(dish3Img);
  menuContainer.appendChild(dish3);

  let dish4 = document.createElement("div");
  dish4.className = "menuDishes";
  dish4.id = "dish4";
  let dish4Img = document.createElement("img");
  dish4Img.id = "dish4Img";
  dish4Img.src =
    "https://d1ralsognjng37.cloudfront.net/b77564e1-0ba4-41de-822d-a8d3da5a81f4.jpeg";
  dish4.appendChild(dish4Img);
  menuContainer.appendChild(dish4);

  let dish5 = document.createElement("div");
  dish5.className = "menuDishes";
  dish5.id = "dish5";
  let dish5Img = document.createElement("img");
  dish5Img.id = "dish5Img";
  dish5Img.src =
    "https://www.cocinayvino.com/wp-content/uploads/2019/10/TimeOutCom.jpg";
  dish5.appendChild(dish5Img);
  menuContainer.appendChild(dish5);

  let dish6 = document.createElement("div");
  dish6.className = "menuDishes";
  dish6.id = "dish6";
  let dish6Img = document.createElement("img");
  dish6Img.id = "dish6Img";
  dish6Img.src =
    "https://i.pinimg.com/originals/fb/6e/37/fb6e373448199307f012d6eb5dc22429.jpg";
  dish6.appendChild(dish6Img);
  menuContainer.appendChild(dish6);

  let dish7 = document.createElement("div");
  dish7.className = "menuDishes";
  dish7.id = "dish7";
  let dish7Img = document.createElement("img");
  dish7Img.id = "dish7Img";
  dish7Img.src =
    "https://cdn.vox-cdn.com/thumbor/kpC1WgqR0Ucyv5pzag-gFst0u0g=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/12193375/los_pollos_hermanos.jpg";
  dish7.appendChild(dish7Img);
  menuContainer.appendChild(dish7);

  let dish8 = document.createElement("div");
  dish8.className = "menuDishes";
  dish8.id = "dish8";
  let dish8Img = document.createElement("img");
  dish8Img.id = "dish8Img";
  dish8Img.src =
    "https://b.zmtcdn.com/data/pictures/9/18694419/365edf9b47a9781c024e5f8aef504f17.jpg";
  dish8.appendChild(dish8Img);
  menuContainer.appendChild(dish8);

  let main = document.querySelector("#main");
  main.appendChild(menuContainer);
}

export { menuPageFunction };
