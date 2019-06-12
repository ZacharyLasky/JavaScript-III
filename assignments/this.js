/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: 'this' refers to the window object
* 2. Implicit Binding: 'this' refers to the object left of the dot
* 3. New Binding: 'this' refers to left of dot after declaring new instance of Object
* 4. Explicit Binding: 'this' refers to whichever instance of object you input inside of () after .call
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'GOOD MORNING',
    person: 'GUY',
    yell: function() {
        return `${this.greeting} ${this.person}`;
    }
}
myObj.yell();
// Principle 3

// code example for New Binding
function Person(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old`
    }
}
const zach = new Person({name: 'zach', age: 22});
const billy = new Person({name: 'billy', age: 107});
zach.speak();
billy.speak();
// Principle 4

// code example for Explicit Binding
zach.speak.call(billy);
billy.speak.call(zach);
