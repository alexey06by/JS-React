    // NORMAL level
    // Task 1
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
    fibonacci.forEach((value) => console.log(value));
    function printElement(element){
        console.log(element)
    }
    fibonacci.forEach(printElement)

    // Task 2
    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
    const updatedUsers = users.map((value, index) => `member ${index+1}: ${value}`);
    console.log(updatedUsers);
    function updateUser(user,index){
        return `member ${index+1}: ` + user 
    }
    const updatedUsers2 = users.map(updateUser);
    console.log(updatedUsers2);

    // Task 3
    const numbers = [7, -4, 32, -90, 54, 32, -21];
    const positiveNumbers = numbers.filter((value)=>value>=0);
    console.log(positiveNumbers);
    function removeNegative(element){
        return element >= 0
    }
    const positiveNumbers2 = numbers.filter(removeNegative);
    console.log(positiveNumbers2);

    // Task 4
    const fibonacciTask4 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
    console.log(fibonacciTask4.reduce((accum, value)=>accum+=value, 0));
    function sum(accum, element){
        return accum+=element
    }
    console.log(fibonacciTask4.reduce(sum, 0));

    // Task 5
    const numbersTask5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
    console.log(numbersTask5.find((value)=>value%2 === 0));
    function isEven(element){
        return element % 2 === 0
    }
    console.log(numbersTask5.find(isEven));

    // ADVANCED level
    // Task 1
    function Student(salary, rate, name){
        this.salary = salary
        this.rate = rate
        this.name = name
        this.calculateStudentCredit = function(){
            switch(this.rate){
                case "A" :
                    return this.salary * 12
                case "B" :
                    return this.salary * 9
                case "C" :
                    return this.salary * 6  
                case "D" :
                    return 0        
            }
        }
    }        
    const students = [
        new Student(1000, "A", "Anton"), 
        new Student(1000, "A", "Andrew"),
        new Student(1000, "A", "Alexey"),
        new Student(1000, "A", "Viktor"),
        new Student(1000, "A", "Slava"),
     ]
    function calculateGroupCredit(array){
        return array.reduce((accum,element)=>accum+=element.calculateStudentCredit(), 0)
    }
    console.log(calculateGroupCredit(students))

    // Task 2
    function deleteVowels (str){
        const newStr = str.split("").reduce((accum, value)=>{
            if (value === "a" || value === "A"){}
            else if (value === "e" || value === "E"){}
            else if (value === "u" || value === "U"){}
            else if (value === "i" || value === "I"){}
            else if (value === "o" || value === "O"){}
            else if (value === "i" || value === "I"){}
            else {
                accum+=value;
            }
            return accum;
        }, "");
        return newStr;
    }
    console.log(deleteVowels("This website is for losers LOL!"));

    // Task 3
    function accum (str) {
        const arr = str.split("").map((value, i) =>{
            let accumValue = "";
            for (let j = 0; j<=i; j++){
                if (j === 0){
                    value=value.toUpperCase();
                } else {
                    value=value.toLowerCase();
                }
                accumValue+=value;  
            }
            return accumValue;                  
        });
        return arr.join("-");
    }
    console.log(accum("RqaEzty"));

    // Task 4
    function highAndLow (str) {
        let arr = str.split(" ");
        let max = Number(arr[0]);
        let min = Number(arr[0]);
        for (let i = 1; i<arr.length; i++){
            if (max<Number(arr[i])){
                max = Number(arr[i]);
            }
            if (min>Number(arr[i])){
                min = Number(arr[i]); 
            }
        }
        return `${max} ${min}`;
    }
    console.log(highAndLow("1 9 3 4 -5"));

    // Task 5
    function isIsogram (str){
        const arr = str.toLowerCase().split("");
        const set = new Set(arr);
        return arr.length === set.size;
    }
    console.log(isIsogram("moOse"));

    // Task 6
    const str = "ABC"
    const total1 = str.split("").reduce((accum, value) => accum+=String(value.charCodeAt()),"")
    const total2 = total1.split("").map(value=> value === '7' ? '1' : value).join("")
    console.log(Number(total1) - Number(total2))

    // Task 7
    function convertString(str){
        let arr = str.toLowerCase().split("")
        return arr.map((value,i,array)=>array.indexOf(value) === array.lastIndexOf(value) ? "(" : ")")
                .join("")
    }
    console.log(convertString('din'))
    console.log(convertString("recede"))
    console.log(convertString('Success'))
    console.log(convertString('(( @'))
