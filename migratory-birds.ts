function migratoryBirds(arr: number[]): number {
    // Write your code here
    const freq: Record<number, number> = {};
    for (const bird of arr) {
        freq[bird] = (freq[bird] || 0) + 1;
    }
    
    const maxCount = Math.max(...Object.values(freq));
    for (let i = 1; i <= 5; i++) {
        if (freq[i] === maxCount) return i;
    }
    return -1;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))