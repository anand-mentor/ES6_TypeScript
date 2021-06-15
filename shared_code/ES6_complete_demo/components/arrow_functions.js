export function testWithoutArrowFunctions() {
    var nos = [4, 7, 2, 8];
    
    //ES5 code
    var square_nos = nos.map(function(no){
        return no * no;
    });

    //ES6 code
    var square_nos = nos.map((no) => no * no); //Arrow function as expression body
    square_nos = nos.map((no) =>  {
         return no * no; 
        }); //Arrow function as statement block

    console.log("square_nos", square_nos);


    var facebookUser = {
        user: 'Ivan',
        friends: ['Isabela', 'Tonny', 'Anand'],
        printFirends: function() {
            console.log("printFriends(): ", this.user); //OK
            let tempUser = this.user;
            //ES5 code
            this.friends.map(function(friend) {
                console.log(tempUser, ' knows ', friend); //OK
        });
    }
    }
    facebookUser.printFirends();
}






export function testArrowFunctions() {
    var nos = [4, 7, 2, 8];
    var square_nos = nos.map((no)=>no * no);
    console.log("square_nos", square_nos);

    var facebookUser = {
        user: 'Ivan',
        friends: ['Isabela', 'Tonny', 'Anand'],
        printFirends() {
            this.friends.map((friend) =>
                console.log(this.user, ' knows ', friend)
            );
        }
    }
    facebookUser.printFirends();
}