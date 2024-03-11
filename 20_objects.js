// Create empty objects

let objSample2 = {};

//Object with properties
let studentDetails = {
  name: "Ram",
  class: "B.Tech",
  email: "ram@sham.com",
  age: 22,
};

// objects with multi word as key name
console.log(studentDetails);
let objMulti = {
  key1: "value1",
  "key 2": "value 2",
};
console.log(objMulti);

let objMulti2 = {
  key1: "value1",
  key2: "value 2",
};
console.log(objMulti2);

// Accessing object properties
console.log(studentDetails.name); // Ram
console.log(studentDetails["email"]); // ram@sham.com
console.log(studentDetails["age"]); // 22

objMulti2.key1 = true;

// delete a key using delete keyword
delete objMulti2.key1;
console.log(objMulti2);

// for multi word properties . notation cant be uses

var obj1 = {
  "first name": "Pavan",
  "last name": "Tallapragada",
};

//console.log(obj1.first name);

console.log(obj1["first name"]);

let user = {
  name: "John",
  age: 30,
};

let key = "roll number";

// same as user["roll number"] = true;
user[key] = true;

console.log(user["roll number"]);

// Check if a key exists in an object

//example
let exampleObj = {
  empId: 1,
  empName: "Pawan",
};

console.log("empId" in exampleObj);

// for in loop example

for (let key in exampleObj) {
  console.log(key, exampleObj[key]);
}

// for in loop is used to iterate over the keys of an object
//example of for in loop

for (let key in exampleObj) {
  console.log(key);
}

//Use of this keyword to access the object

let school = {
  schoolName: "abc",

  funcSchoolName() {
    console.log(this.schoolName);
    console.log(school.schoolName);
  },
};

school.funcSchoolName();

// Object referencing

let stuClass = "MCA";
let stuCourse = stuClass;

// above both will create two individual values.

//below using objects we can refer the sam value by two or more objects

let studentClass = {
  class: "MCA",
};
let studentCourse = studentClass;
// it will just copy the reference

studentCourse.class = "BCA";

console.log("studentClass", studentClass);

let sameA = {};
let sameB = sameA;
console.log(sameA === sameB); // true

let notSameA = {};
let notSameB = {};

console.log(notSameA === notSameB); // false

//NOTE: Const objects can be modified

const stu = {
  name: "Ram",
  course: "MCA",
};

console.log(stu);
stu.course = "B.Tech";
console.log(stu);

// clone objects

//Object.assign(dest, ...sources) -
//copies all enumerable own properties from one or more source objects to a target object

let studentCopy = Object.assign({}, stu);
studentCopy.course = "BCA";
console.log("studentCopy", studentCopy);

let o1 = { className: "mca" };

let t1 = { teacherName: "Ram" };

let t2 = { teacherName2: "Shyam" };

Object.assign(o1, t1, t2);

console.log("o1", o1);

//garbage collection

/*
In JavaScript, when an object 
no longer has any references pointing to it, 
it becomes eligible for garbage collection. 
This means that the memory occupied by 
that object can be freed up by the 
JavaScript engine for other use. In this example, 
when a is assigned null, the empty object {} 
that a was originally referencing becomes eligible for garbage 
collection because there are no more references to it.
*/

var a = {};

console.log("a", a);

a = null;

console.log("a", a);
