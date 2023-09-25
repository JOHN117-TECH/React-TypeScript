// Primitives: number, string, boolean
// More complex types: array, object
//Function types,parameters

//Primitives

let age: number;

age = 12;

let userName: string;

userName = 'John';

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: any;

person = {
  name: 'Max',
  age: 32,
};

let people: {
  isEmployee: boolean;
};

people = {
  isEmployee: true,
};

//Type inference
//union types
let course: string | number = 'course';
//type Aliases
type Person = {
  name: string;
  age: number;
};

let personB: Person;
