/*

We define a class Animal using the class keyword.
The constructor method is called automatically when 
a new instance of the class is created. It initializes properties of the object.
We define a method speak within the class 
to demonstrate the concept of encapsulating behavior within classes.

*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const animal = new Animal("Animal");
animal.speak(); // Output: Animal makes a noise.

//Inheritance

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the superclass constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Dog", "Labrador");
dog.speak(); // Output: Dog barks.
