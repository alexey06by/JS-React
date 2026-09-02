    // NORMAL level
    // Task 1
    const colors = ['red', 'green', 'blue'];
    console.log(colors.length);

    // Task 2
    const animals = ['monkey', 'dog', 'cat'];
    console.log(animals.at(-1));

    // Task 3
    const numbers = [5, 43, 63, 23, 90];
    numbers.splice(0,numbers.length);
    console.log(numbers);
    const numbers2 = [5, 43, 63, 23, 90];
    numbers2.length = 0;
    console.log(numbers2);  
    
    // Task 4
    const students = ['Polina', 'Dasha', 'Masha'];
    students.pop();
    students.push("Borya");
    students.shift();
    students.unshift("Andrey");
    console.log(students);

    // Task 5
    const cats = ['Gachito', 'Tom', 'Batman'];
    for (let i = 0; i<cats.length; i++){
        console.log(cats[i]);
    }
    for(const cat of cats){
        console.log(cat);
    }

    // Task 6
    const evenNumbers = [2, 4, 6, 8, 10];
    const oddNumbers = [1, 3, 5, 7, 9];
    for (const element of evenNumbers){
        oddNumbers.push(element);
    }
    console.log(oddNumbers.indexOf(8))

    // Task 7
    const binary = [0, 0, 0, 0];
    console.log(binary.join('1'));

    // ADVANCED level
    // Task 1
    function checkIfPalindrome (word){
        const arr1 = word.split("");
        const arr2 = [];
        for(const element of arr1){
            arr2.push(element);
        }
        arr2.reverse();
        return arr1.join("") === arr2.join("");
    }
    console.log(checkIfPalindrome('топот'));

    // Task 2
    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ]
    let count = 0;
    let sum = 0;
    for (const row of matrix){
        for(const element of row){
            sum = sum + element;
            count++;
        }
    }
    console.log(sum/count);

    // Task 3
    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
    const positive = [];
    const negative = [];
    for (const element of mixedNumbers){
        if (element>= 0){
            positive.push(element);
        } else{
            negative.push(element);
        }
    }
    console.log(positive, negative);

    // Task 4
    const arr1 = [];
    const arr2 = [];
    function randomNumber(min, max) {
        let random = min + Math.random() * (max - min);
        return random;
    }
    for (let i = 0; i<5; i++){
        arr1.push(randomNumber(0,5));
        arr2[i]=arr1[i]**3;
    }
    console.log(arr1, arr2);
