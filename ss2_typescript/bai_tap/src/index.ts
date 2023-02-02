// happy coding 👻
let checkFibonacci = function (num: number): number {

    if (num == 0) {
        return 0;

    }
    if (num == 1) {
        return 1;
    }
    return checkFibonacci(num - 1) + checkFibonacci(num - 2);


}
let sumFibonacci: number = 0;
let amountNumber: number = 6;
let arr: Array<number> = [];
for (let i = 0; i < amountNumber; i++) {
    arr.push(checkFibonacci(i));
    sumFibonacci += checkFibonacci(i);

}
console.log(amountNumber + "số fibonacci đầu tiên" + arr);
console.log("Tổng " + amountNumber + "Số fibonacci đầu tiên" + sumFibonacci);




