
//create a function
function getMilk(){
    console.log("leaveHouse");
    console.log("moveRight");
}

//calling a function
getMilk();

function buyMilk(money){
    var noOfMilk =Math.floor( money/2.99);
    var change =Math.floor( money%2.99);
    console.log("You can buy milk "+ noOfMilk+ " milk.")
    return change;
}
var change1 = buyMilk(20);
console.log("Your change is "+change1);