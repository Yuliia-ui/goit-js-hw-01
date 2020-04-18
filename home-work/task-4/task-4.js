let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const input = prompt('Введите количество дроидов');

if (input === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = Number(input) * pricePerDroid;
  console.log(totalPrice);
}
if (totalPrice > credits) {
  console.log('Недостаточно средств на счету');
} else {
  credits -= totalPrice;
  console.log(
    `Вы купили ${input} дроидов, на счету осталось ${credits} кредитов`,
  );
}
