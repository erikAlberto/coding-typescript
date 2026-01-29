function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    // Write your code here
    if (v1 == v2 && x1 == x2){
        return 'YES';
    }else if ((x1 < x2 && v1 <= v2)||(x1 > x2 && v1 >= v2)){
        return 'NO';
    }else if ((x2 - x1) % (v1 - v2) == 0){
        return 'YES';
    }else{
        return 'NO';
    }
}

console.log(kangaroo(0,3,4,2));