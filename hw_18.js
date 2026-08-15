    // NORMAL level
    // Task 1
    function getSum(x){
        let result = 0;
        for (let i = 0; i<=x; i++){
            result = result + i;
        }
        return result;
    }
   console.log(getSum(100));

   // Task 2
    function calculateOverpayment (creditAmount){    
        return creditAmount * 0.17 * 5;
    }
    console.log(calculateOverpayment(10000));

    // Task 3
    function trimString (string, valueFrom, valueTo){
        return string.substring(valueFrom, valueTo);
    }
    console.log(trimString("Test string", 0, 4));

    // Task 4
    function getSumNumbers(number){
        number= String(number);
        let numbers = number.split("");
        let result = 0;
        for (let i = 0; i<numbers.length; i++){
            result=result+Number(numbers[i]);
        }
        return result
    }
    console.log(getSumNumbers(2021));

    // Task 5
    function getSumTask5(a, b){
        let result = 0;
        if (a === b){
            result = a;
        } else if (a<b){
            while (a<=b){
                result = result +a;
                a = a+1;
            }
        } else{
            while (b<=a){
                result = result +b;
                b= b+1;
            }     
        }
        return result;
    }
    console.log(getSumTask5(-1,2));

    // Task 6
    function fooboo (boolean, foo, boo){
        boolean ? foo() : boo();
        }
    function foo(){
        console.log('foo');
    }
    function boo(){
        console.log('boo');
    }
    fooboo(true, foo, boo);

    // ADVANCED level
    // Task 1
    function createTriangle (a, b, c){
        let result; 
        if (a<b+c && b<a+c && c<a+b){
            result=true;
        } else {
            result=false;
        }
        return result;
    }
    console.log(createTriangle(1,2,2));

    // Task 2       
    function cutChocolate (n,m){
        let result=0;
        if (n === 0 || m === 0){
            result = 0;
        } else {
            result = m * n - 1;
        }  
        return result;
    }
    console.log(cutChocolate(3,3));

    // Task 3
    const taxValue = Number(prompt("Укажите ставку налога в процентах"));
    const phonePrice = Number(prompt("Укажите цену телефона"));
    const accessoryPrice = Number(prompt("Укажите цену аксессуара"));
    let bankAccountBalance = Number(prompt("Укажите баланс банковского счета"));
    let numberOfPhones = 0;
    let moneySpent = 0;
    function calculateTax(amountOfMoney,tax){
        return amountOfMoney*tax*0.01;
    }
    function formatPrice(amountOfMoney){
        return `${amountOfMoney.toFixed(2)}$`
    }
    let balance = bankAccountBalance;
    while (balance>0){
        balance = balance - phonePrice - accessoryPrice;
        moneySpent = moneySpent + phonePrice + accessoryPrice;
        numberOfPhones = numberOfPhones + 1;
    }
    if (balance < 0){
        balance = balance + phonePrice + accessoryPrice;
        numberOfPhones = numberOfPhones - 1;
        moneySpent = moneySpent - phonePrice - accessoryPrice;
    }
    let resultAmount = calculateTax(moneySpent,taxValue)+moneySpent;
    console.log(`Вычисленная сумма покупки: ${formatPrice(resultAmount)}`);
    if (resultAmount<=bankAccountBalance){
        console.log(`Вы можете позволить себе купить следующее количество телефонов с аксессуарами: ${numberOfPhones}`);
    } else {
        console.log(`Вы не можете позволить себе купить следующее количество телефонов с аксессуарами: ${numberOfPhones}`);
    }
    