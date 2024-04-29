let name_hero = "Hero";
let exp_hero = 500;
let mensage = `${name_hero} está com ${exp_hero} de experiencia e está no nivel `;

switch (true) {
  case exp_hero < 1000:
    console.log(mensage + "Ferro");
    break;
  case exp_hero >= 1001 && exp_hero <= 2000:
    console.log(mensage + "Bronze");
    break;
  case exp_hero >= 2001 && exp_hero <= 5000:
    console.log(mensage + "Prata Ouro");
    break;
  case exp_hero >= 5001 && exp_hero <= 8000:
    console.log(mensage + "Platina Diamante");
    break;
  case exp_hero >= 8001 && exp_hero <= 9000:
    console.log(mensage + "Ascendente");
    break;
  default:
    console.log(mensage + "IMORTAL");
}
