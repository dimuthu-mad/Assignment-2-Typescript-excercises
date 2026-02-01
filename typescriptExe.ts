// 1. Union Types ( | means OR ) 
//Exercise 1 
/*
type IDType = number | string;

const showID = (idNumber: IDType,idName:string) =>{
    console.log("Your ID Number is:", idNumber,`\n`+"your Name is:", idName);
}

showID(12345,"Dimuthu");

// Exercise 2
type FruitType = "apple" | "banana" | "orange";

const eatFruit = (fruit: FruitType) => {
    console.log(`You ate an ${fruit}.`);
}

eatFruit("orange");
eatFruit("apple");

// Exercise 3
type Result = false | true;
const printResult = (result: Result) => {
    if(result === true){
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

printResult(true);
printResult(false);

//2. Interfaces and Type Aliases ( & means AND ) 
//Exercise 1
interface Book {
    title : string;
    pages : number;
}

const describeBook = (book: Book) => {
    console.log(`The book ${book.title} has ${book.pages} pages.`);
}

describeBook({title: "TypeScript", pages: 50});

// Exercise 2
interface Teacher {
    name: string;
    subject: string;    
}
interface Employee {
    id  : number;
    email : string;
}

type SchoolTeacher = Teacher & Employee;

const printTeacherInfo  = (teacher: SchoolTeacher) => {
    console.log(`Teacher Name: ${teacher.name}\nSubject: ${teacher.subject}\nID: ${teacher.id}\nEmail: ${teacher.email}`);
}

printTeacherInfo({name: "Dimuthu ", subject: "Math", id: 11, email:"dimuthu@gmail.com"});
*/

// Exercise 3
interface Car {
    brand: string;
    year: string;
}

const printCar = (car: Car) => {
    console.log("Brand: " + car.brand + "\nYear: " + car.year);
}
printCar({brand: "Audi RS6", year: "2025"});