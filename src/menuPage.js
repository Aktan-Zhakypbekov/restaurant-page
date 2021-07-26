function menuPageFunction() {
  let menuContainer = document.createElement("div");
  menuContainer.id = "menuContainer";

  let dish1 = document.createElement("div");
  dish1.className = "menuDishes";
  dish1.id = "dish1";
  menuContainer.appendChild(dish1);
  let dish2 = document.createElement("div");
  dish2.className = "menuDishes";
  dish2.id = "dish2";
  menuContainer.appendChild(dish2);
  let dish3 = document.createElement("div");
  dish3.className = "menuDishes";
  dish3.id = "dish3";
  menuContainer.appendChild(dish3);
  let dish4 = document.createElement("div");
  dish4.className = "menuDishes";
  dish4.id = "dish4";
  menuContainer.appendChild(dish4);
  let dish5 = document.createElement("div");
  dish5.className = "menuDishes";
  dish5.id = "dish5";
  menuContainer.appendChild(dish5);
  let dish6 = document.createElement("div");
  dish6.className = "menuDishes";
  dish6.id = "dish6";
  menuContainer.appendChild(dish6);
  let dish7 = document.createElement("div");
  dish7.className = "menuDishes";
  dish7.id = "dish7";
  menuContainer.appendChild(dish7);
  let dish8 = document.createElement("div");
  dish8.className = "menuDishes";
  dish8.id = "dish8";
  menuContainer.appendChild(dish8);

  let main = document.querySelector("#main");
  main.appendChild(menuContainer);
}

export { menuPageFunction };
