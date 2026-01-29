function printTable(n) {
for (let i = 1; i <= 10; ++i)
        console.log(n + " * " +i + " = " + n * i );
}

let n = 5;
printTable(n);


function printTable(n, i = 1){
    if (i == 11)
        return;
     console.log(n + " * " +i + " = " + n * i );
     i++;
     printTable(n,i);
}

let n = 5;
printTable(n);

