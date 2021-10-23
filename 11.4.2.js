function numbersCheck (num) {

        let isPrime = true, result = '';

        if (num > 1 && num <= 1000) {
            for (let i = 2; i < num; i++) {
                if(num % i === 0) {
                    isPrime = false;
                }
            }
            result = isPrime ? `Число ${num} - простое число` : `Число ${num} - составное число`;
        } else {
            result = 'Данные неверны';
        }
        return result;
    }

console.log(numbersCheck (2))