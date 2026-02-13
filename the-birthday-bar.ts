function birthday(s: number[], d: number, m: number): number {
    // Write your code here
    let count = 0;
    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;
        for (let j = i; j < i + m; j++) {
            sum += s[j];
        }
        if (sum === d) {
            count++;
        }
    }
    return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2))