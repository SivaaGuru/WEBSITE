function isPrime(n) 
{ 
   
    if (n <= 1) return false; 

   
    for (let i = 2; i < n; i++) 
        if (n % i == 0) 
            return false; 
    return true; 
} 


    isPrime(11)? document.write(" true" + "<br>"): document.write(" false" + "<br>"); 
    isPrime(15)? document.write(" true" + "<br>"): document.write(" false" + "<br>"); 

