function isPrime() {
    let value = window.prompt("Nhập số n: ");
    // if (value < 2) {
    //     console.log(value, "is not the prime");
    // } else {
    //     let count = 0;
    //     for (let i = 2; i < value / 2; i++) {
    //         if (value % i === 0) {
    //             count++;
    //             if (count >= 1);
    //             break;
    //         }
    //     }
    //     if (count === 0) {
    //         console.log(value, "is prime");
    //     } else {
    //         console.log(value, "is not prime");
    //     }
    // }
    let check = true;
    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) {
            check = false;
            break;
        }

    }
    if (check) {
        console.log(value, "is prime");
    } else {
        console.log(value, "is not prime");
    }


}
isPrime();