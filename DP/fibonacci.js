//Get the nth term of fibonacci
function fibonacci(n) {
    const memo = new Array(n + 1).fill(0);
    return fib(n, memo);
}
function fib(n, memo) {

    if (n <= 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        if (memo[n] == 0) {
            memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
        }
        return memo[n];
    }
}

console.log(`Fibonacci 4 -> ${fibonacci(4)}`);
console.log(`Fibonacci 5 -> ${fibonacci(5)}`);
console.log(`Fibonacci 6 -> ${fibonacci(6)}`);