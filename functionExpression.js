/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function (num){
    var str="";
    for (var i=0;i<num;i++){
        str+= "ha";
    }
    
    return str+"!";
};/* finish the function expression */

console.log(laugh(10));
