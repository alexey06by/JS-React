// Basic level
// Task 1
let a = 'true'
let b = false
let c = 17
let d = undefined
let e = null
console.log(typeof a, typeof b, typeof c, typeof d, typeof e)

 //Task 2
  let height = 15;
  let width = 20;
  if (width > height) {
    console.log(width);
  } else if (width === height) {
    console.log("Числа равны");
  } else {
    console.log(height);
  }

  //Task 3
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }

  //Task 4
  let key = true;
  let documnets = true;
  let pen = true;
  let apple = false;
  let orange = true;
  let shouldGoToWork = key && documnets && pen && (apple || orange);
  console.log(shouldGoToWork);

  //Task 5
  let numberToCheck = prompt("Введите число");
  if (numberToCheck % 5 === 0 && numberToCheck % 3 === 0) {
    console.log("FizBuz");
  } else if (numberToCheck % 5 === 0) {
    console.log("Fiz");
  } else if (numberToCheck % 3 === 0) {
    console.log("Buz");
  }

  //Task 6
  let age = prompt("Укажите Ваш возраст");
  if (age <= 18 && age >= 16) {
    console.log("Можешь выкурить сигаретку, только маме не говори");
  } else if (age > 18) {
    console.log("Попей пивка");
  } else if (age < 18) {
    console.log("Пей колу");
  }

  //Task 7
  let cardinalDirection = prompt("Укажите сторону света");
  switch (cardinalDirection) {
    case "юг":
      console.log("на юг пойдешь счастье найдешь");
      break;
    case "север":
      console.log("на север пойдешь много денег найдешь");
      break;
    case "запад":
      console.log("на запад пойдешь верного друга найдешь");
      break;
    case "восток":
      console.log("на восток пойдешь разработчиком станешь");
      break;
    default:
      console.log("Попробуте еще раз");
  }

  // Advanced level
  // Task 1
  let name = 'пОлИнА нАбЕрЕжНаЯ'
  name = name.toLowerCase()
  let nameArr = name.split(' ')
  nameArr.forEach((value, i, array) => {
    array[i] = value[0].toUpperCase() + value.slice(1) 
  })
  alert(`Привет, ${nameArr.join(' ')}!`)

  // Task 2
  const firstNumber = Number(prompt("Введите число: "));
  const secondNumber = Number(prompt("Введите сколько отнять: "));
  const thirdNumber = Number(prompt("Введите сколько прибавить: "));
  const fourthNumber = Number(prompt("Введите на сколько умножить: "));
  const fivesNumber = Number(prompt("Введите на сколько разделить: "));
  let result = ((firstNumber - secondNumber + thirdNumber) * fourthNumber) / fivesNumber;
  alert(
    `((((${firstNumber} - ${secondNumber}) + ${thirdNumber}) * ${fourthNumber}) / ${fivesNumber} = ${result})`,
  );

  //Task 3
  let outString = "#";
  for (let i = 1; i <= 6; i++) {
    console.log(outString);
    outString = outString + "#";
  }