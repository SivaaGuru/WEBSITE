function generatePassword(length,includeLowercase, includeUppercase ,includeNumbers,includesymbols ){

}

    const LowerCaseChars = "abcdefghijklmnoprstuvwxyz";
    const uppperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+";

    let allowedchars="";
    let password="";


    allowedchars += includeLowercase ? LowerCaseChars : "";
    allowedchars += includeUppercase ? uppperCaseChars : "";
    allowedchars += includeNumbers? numberChars : "";
    allowedchars += includesymbols? symbolChars : "";

   if(length <=0){
    return`(password length must be atleast 1)`;
   }
   if(allowedchars.length === 0){
    return `(Atleast 1 set of characters needs to be selected)`;
   }
   for(let i = 0; i < length; i++){
       const randomIndex = Math.floor(Math.random() * allowedChars.length);
       password += allowedchars[randomIndex];
    }
    