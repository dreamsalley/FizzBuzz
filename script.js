var user = prompt ("Pick a number between 1-100");
switch(user) {
	case 1:
}
for(i = 1; i < 101; i++){
if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
}else if(i % 3 === 0){
    console.log("Fizz");
}else if(i % 5 === 0){
    console.log("Buzz");
}else{
    console.log(i);
}
}