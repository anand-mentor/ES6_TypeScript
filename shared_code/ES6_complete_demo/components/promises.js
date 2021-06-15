export function testPromises_2() {
    var p = Promise.resolve("foo");
    p.then((res)=>console.log("p response: ", res));
    console.log("Promise p = ", p)

    let p2 = new Promise(function(resolve, reject) {
        setTimeout(()=>reject('Timed out!!'), 4000);
    });
    p2.then((response)=>console.log("p2 response: ", response));
    console.log("Promise p2 = ", p2);
}

export function testPromises() {
    var p2 = Promise.resolve("foo"); 
    p2.then((res) => console.log(res)); 

    var p = new Promise(function(resolve, reject) { 
    setTimeout(() => resolve(4), 2000); 
    }); 

    p.then((res) => { 
    res += 2; 
    console.log(res); 
    });

    p.then((res) => console.log(res)); //Promises are immutable. 	

    var p = new Promise(function(resolve, reject) { 
        setTimeout(() => reject("Timed out!"), 2000); 
    });

    p.then((res) => console.log(res), 
    (err) => console.log(err)); 
    console.log("DONE");
}

export function testAllPromises() {
var p = new Promise(function(resolve, reject) { 
	resolve("bar"); 
});
var p2 = new Promise(function(resolve, reject) { 
	setTimeout(() => resolve("foo"), 2000); 
});
    Promise.all([p, p2]).then(function (promises) { promises.forEach(function (text) { console.log(text); }); });

    Promise.race([p, p2]).then(function (promiseResponse) { console.log(promiseResponse); });
}

export function testPromises_3() {
    let myPromise = Promise.resolve(50);
    console.log('myPromise: ', myPromise);

    myPromise.then((response)=>console.log('Response received: ', response));

    myPromise = new Promise((resolve, reject)=>
        setTimeout(()=>reject("Pizza order rejected"), 4000)
    );

    myPromise.then((response)=>console.log('Pizza order response received: ', response))
             .catch((error)=>console.log('Handling the error: ', error));



    var p = new Promise(function(resolve, reject) { 
        resolve("bar"); 
    });
    var p2 = new Promise(function(resolve, reject) { 
        setTimeout(() => resolve("foo"), 5000); 
    });
    Promise.all([p, p2]).then(function (promises) { promises.forEach(function (text) { console.log(text); }); });
            

    var pr_1 = new Promise(function(resolve, reject) { 
        setTimeout(() => reject("After 5 seconds resolve: FOO"), 5000);
    });
    var pr_2 = new Promise(function(resolve, reject) { 
        setTimeout(() => resolve("After 15 seconds resolve: BAR"), 15000); 
    });
    Promise.race([pr_1, pr_2]).then((response)=>console.log(response));
}

export function testPromises_4() {
    let mypromise = new Promise(function(resolve, reject) {
            setTimeout(()=>resolve(50), 5000);
    });

    let mypromise_2 = new Promise(function(resolve, reject) {
        setTimeout(()=>resolve(30), 7000);
    });

    //mypromise.then((response, error)=> { console.log('Promise error ', error) });
    /*
    Promise.all([mypromise, mypromise_2]).then(function(all_promises) {
        all_promises.forEach((response)=>console.log("Promise response ", response));
    });
    */

    Promise.race([mypromise, mypromise_2]).then((response)=>console.log(response));
}


















