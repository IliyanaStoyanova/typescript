function printText(s: string, aligment: "left" | "right" | "center") {
    //.....
}
printText("Hello world", "left");
printText("G'day, mate", "center");
printText("Iliyana", "test"); //error

interface Options {
    width: number;
}
function configure(x: Options | "auto") {
// ...
}
configure({ width: 100 });
configure("auto");
configure("automatic"); // error

function doSomething(x: string | null) {
    if (x === null) {
        // do nothing
    } else {
        console.log("Hello, " + x.toUpperCase());
    }
}
function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed()); 
}
/*
interface Shape {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}
function handleShape(shape: Shape) {
// oops!
    if (shape.kind === "rect") {
  // This condition will always return 'false' since the types '"circle" | "square"' and '"rect"' have no overlap.
        // ...
    }
}
function getArea(shape: Shape) {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius ** 2; //Object is possibly 'undefined'.
    }
}
function getArea(shape: Shape) {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius! ** 2; // 
    }
}
*/
interface Circle {
    kind: "circle";
    radius: number;
}
   
interface Square {
    kind: "square";
    sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2; //(parameter) shape: Circle
    }
}