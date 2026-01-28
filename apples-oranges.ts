function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    // Write your code here
    let cantApples = 0;
    let cantOranges = 0;
    apples.forEach(apple => {
        if(a + apple >= s && a + apple <= t){
            cantApples++;
        }
    })
    oranges.forEach(orange => {
        if(b + orange >= s && b + orange <= t){
            cantOranges++;
        }
    })
    console.log(cantApples);
    console.log(cantOranges);
}

countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4])