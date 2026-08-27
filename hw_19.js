    // NORMAL level
    // Task 1
    const myFirstObj = {
        key1 : "Test",
        key2 : 2
    }
    delete myFirstObj.key1;
    delete myFirstObj.key2;
    console.log(myFirstObj);

    // Task 2
    const ObjTask2 = {
        key1 : "Test",
        key2 : 2
    }
    console.log("key2" in ObjTask2);

    // Task 3
    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
    for (const key in student){
        console.log(key);
        console.log(student[key]);
    }

    // Task 4
    const colors = {
        'ru pum pu ru rum': {
            red: 'красный',
            green: 'зеленый',
            blue: 'синий'
        },
    };
    console.log(colors['ru pum pu ru rum'].red, colors['ru pum pu ru rum'].blue);

    // Task 5
    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrey2: 664,
        alexandra: 199
    }
    let sumOfSalaries = 0;
    for (const key in salaries){
        sumOfSalaries = sumOfSalaries +salaries[key];
    }
    let averageSalary;
    averageSalary = sumOfSalaries/Object.keys(salaries).length;
    console.log(averageSalary);

    // Task 6
    const registrationData = {
        userLogin : prompt('Укажите логин'), 
        password : prompt('Укажите пароль')
    };
    const registrationDataConfirmation = {
        userLogin : prompt('Подтвердите логин'),
        password : prompt('Подтвердите пароль')
    };
    if (registrationData.userLogin === registrationDataConfirmation.userLogin 
        && registrationData.password === registrationDataConfirmation.password){
            console.log("Добро пожаловать");
        } 

    // ADVANCED level
    // Task 1
    function convertFormat(str){
        const numbers = {
           1 : "один",
           2 : "два",
           3 : "три",
           4 : "четыре",
           5 : "пять",
           6 : "шесть",
           7 : "семь",
           8 : "восемь",       
           9 : "девять"
        };
        return `${numbers[str.charAt(0)]} : ${numbers[str.charAt(2)]}`;
    }
    console.log(convertFormat("8:5"));

    // Task 2
    let student1 = {
        name: 'Polina',
        age: 27,
    };
    let student2 = {
        name: 'Polina',
        age: 27,
    };
    console.log(JSON.stringify(student1) === JSON.stringify(student2));

    // Task 3
    const animals = {
        cat: {
            name: 'Енчик',
            age: 3,
        },
        dog: {
            name: 'Орео',
            age: 2,
        }
    }
    try{
        console.log(animals.bird.name)
    }
    catch{
        console.log('информация отсутствует')
    }
