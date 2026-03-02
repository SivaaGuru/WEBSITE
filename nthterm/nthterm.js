function nthTermOfAp(a1, a2, n)
{
    let nthTerm = a1;
    let d = a2 - a1;
    for (let i = 1;i < n;i++) {
        nthTerm += d;
    }
    return nthTerm;
}

let a1 = 2,a2 = 3;
let n = 4;
console.log(nthTermOfAp(a1, a2, n))
