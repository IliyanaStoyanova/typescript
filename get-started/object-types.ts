// In all three examples above, we’ve written functions that take objects that contain the property name (which must be a string) and age (which must be a number).
/* interface Person {
//     name: string;
//     age: number;
// }

// function greet(person: Person) {
//     return `Hello ${person.name}`;
// }

// function greet(person: {name: string; age: number}) {
//     return `Hello ${person.name}`;
// }

// type Person = {
//     name: string;
//     age: number;
// };

// function greet(person: Person) {
//     return `Hello ${person.name}`;
// }*/
/*
interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }
   
  interface AddressWithUnit extends BasicAddress {
    unit: string;
  }
*/
/*
interface Colorful {
    color: string;
  }
   
  interface Circle {
    radius: number;
  }
   
  interface ColorfulCircle extends Colorful, Circle {}
   
  const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
  };
  */
/*
//interfaces allowed us to build up new types from other types by extending them. TypeScript provides another construct called intersection types that is mainly used to combine existing object types.

//An intersection type is defined using the & operator.
  interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }
   
  type ColorfulCircle = Colorful & Circle;*/

