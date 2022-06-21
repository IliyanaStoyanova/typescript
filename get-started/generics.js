/*
// trqwa da sa ot posochenite tipove
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

const test: StringArray = ["test", "test2"];
const testError: StringArray = [2, 3, 4];
const testNumber: NumberArray = [2, 3, 4];
const objNameArray: ObjectWithNameArray = [{name: "test"}];
*/
var obj = backpack.get();
backpack.add('test'); //right
// backpack.add(23); //wrong
