function getTotalX(a: number[], b: number[]): number {
    // Write your code here
    function mcd(x: number, y: number): number {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    
    function mcm(x: number, y: number): number {
        return (x * y) / mcd(x, y);
    }
    
    let mcmArray = a[0];
    for (let i = 1; i < a.length; i++) {
        mcmArray = mcm(mcmArray, a[i]);
    }
    
    let mcdArray = b[0];
    for (let i = 1; i < b.length; i++) {
        mcdArray = mcd(mcdArray, b[i]);
    }
    
    let count = 0;
    let multiplo = mcmArray;
    
    while (multiplo <= mcdArray) {
        if (mcdArray % multiplo === 0) {
            count++;
        }
        multiplo += mcmArray;
    }
    
    return count;
}

console.log(getTotalX([2, 6], [24, 36]))