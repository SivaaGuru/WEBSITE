
class product{
    constuctor(name,price){
        this.name = name;
        this.price = price;
    }

    displayproduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }

}

const salesTax = 0.05;


const product1 = new Product("shirt ",19.99);
const product2 = new Product("pant",20.00);
const product3 = new Product("undies",100.00);

product1.displayproduct();

const total = product1.calculateTotal(salesTax);  
console.log(`Total price (with tax):$${total.toFixed(2)}`); 

