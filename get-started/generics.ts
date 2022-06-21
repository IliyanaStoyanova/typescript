/*
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

const test: StringArray = ["test", "test2"];
const testError: StringArray = [2, 3, 4];
const testNumber: NumberArray = [2, 3, 4];
const objNameArray: ObjectWithNameArray = [{name: "test"}];
*/

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}
declare const backpack: Backpack<string>;
const obj = backpack.get();
backpack.add('test'); //right
// backpack.add(23); //wrong