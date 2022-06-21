/*
interface User {
    name: string;
    id: number;
}
// You can then declare that a JavaScript object conforms to the shape of your new interface by using syntax like : TypeName after a variable declaration:
const user: User = {
    name: "Iliyana",
    id: 0,
};
*/
/*
interface User {
    name: string;
    id: number;
}
class UserAccount {
    name: string;
    id: number;

    constructor (name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}
const user: User = new UserAccount("Iliyana", 1);

console.log(user);
*/
/*
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
const test: WindowStates = "open" // that's ok 
const newtest: WindowStates = "testst" // that's error
*/
/*
function getLength(obj: string | string[]) {
    return obj.length;
}
console.log(getLength('tests')); // 5
console.log(getLength(["test", "dali", "tova"])); //3
*/

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
console.log(wrapInArray('test'));
console.log(typeof wrapInArray('test'));
console.log(Array.isArray(wrapInArray('test'))); // true it is array