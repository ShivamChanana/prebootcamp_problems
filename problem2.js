for(var x=1; x<=100; x++){
    if(  x % 15 == 0){
        console.log("FIZZBUZZ");
    }
    else if( x % 3==0){
        console.log("FIZZ");
    }
    else if( x % 5 == 0){
        console.log("BUZZ");
    }
    else{
        (console.log(x));
    }
}