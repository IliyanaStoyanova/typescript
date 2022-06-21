type Point2 = {
    x: number;
    y: number;
};

function printCoord(pt: Point2) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({x: 100, y: 200});

interface Point3 {
    x: number;
    y: number;
  }
   
  function printCoord3(pt: Point3) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord3({ x: 100, y: 100 });

declare const expr: any;
type T = { a: 1; b: 2; c: 3 };
const a = (expr as any) as T;