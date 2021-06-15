function foo() {
    console.log("Inside foo()");
}

function bar() {
    console.log("Inside bar()");
}

const PI = 3.142;

function add(x, y) {
    return x + y;
}

export { add as sum, foo, bar, PI };

export default function subtract(x, y) {
    return x - y;
}


