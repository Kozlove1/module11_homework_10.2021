function numb1(a){
   return function numb2(b){
       return a + b
    }
}
const summ = numb1(1)(2)
console.log(summ)