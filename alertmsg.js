/* var name = prompt("your name")
var age = prompt("your age")
console.log(name);
console.log(age)
alert("you name is"+name + ";\n your age is "+age +".\n")
 */
// function addsum(){

//     }
// }


// arr=[1,2,3,4,5]
// var res = addsum(1,2,3,4,5);
// alert(arr + "=" + res);

function fn(){
    console.log(arguments)
    console.log(arguments.length)
    console.log(arguments[2])
    var total =0;
    for (i=0;i<arguments.length;i++){
        total += arguments[i];
    }
    return total;    
}

var res = fn(1,2,3);
alert("the result is: " + res);