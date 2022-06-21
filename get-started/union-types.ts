function printId(id: number | string) {
    if(typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(`Your ID is: ` + id);
    }
}
printId(32);
printId('test');
printId({myID: 12});

function welcomePeople(x: string[] | string) {
    if(Array.isArray(x)) {
        console.log(`Hello, ${x.join(" and ")}`);
    } else {
        console.log(`Welcome lone traveler ${x}`);
    }
}