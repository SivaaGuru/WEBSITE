const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers  = true;
const includesymbols = true;

const password = generatePassword(passwordLength,
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  includesymbols ); 

console.log(`Generated paassword: ${password}`);    

