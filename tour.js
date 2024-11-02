let a = prompt("Введіть країну");

let s;
let price = 0;
let hot = confirm("Тур гарячий?");
let coef = 0.8;
switch (a) {
  case "Іспанія":
    price = 1000;
    if (hot) {
        price = price * coef
    }
    s = `Ціна туру в Іспанію: $${price}`;
    break;
  case "Англія":
    price = 1500;
    if (hot) {
        price = price * coef
      }
    s = `Ціна туру в Англію: $${price}`;
    break;
  case "Італія":
    if (hot) {
        price = price * coef
      }
    price = 2000;
    s = `Ціна туру в Італія: $${price}`;
    break;
  case "Франція":
    price = 1700;
    if (hot) {
        price = price * coef
      }
    s = `Ціна туру в Францію: $${price}`;
    break;

  default:
    s = "Вкажіть правильно країну";
}
alert(s);
