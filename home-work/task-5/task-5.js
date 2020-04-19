let input = prompt('Укажите страну доставки');
let country;
let price;

input = input.toLowerCase();

switch (input) {
  case 'Китай':
    country: 'Китай';
    price: 100;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'Чили':
    country: 'Чили';
    price: 250;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'Австралия':
    country: 'Австралия';
    price: 170;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'Индия':
    country: 'Индия';
    price: 80;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  case 'Ямайка':
    country: 'Ямайка';
    price: 120;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

  default:
    console.log('В вашей стране доставка не доступна');
    break;
}
