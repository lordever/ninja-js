function isPrime(value) {
    debugger;
    if(!isPrime.answers) isPrime.answers = {};
    if(!isPrime.answers[value] != null){
        isPrime.answers[value];
    }

    var prime = value != 1; //единица неможет быть простым числом
    for(var i = 2; i< value; i++){
        if(value % i == 0){
            prime = false;
            break;
        }
    }
    return isPrime.answers[value] = prime;
}

assert(isPrime(5), "5 is prime!");
assert(isPrime.answers[5], "The answer was cached!");