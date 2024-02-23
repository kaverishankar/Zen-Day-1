class uber{
    
    constructor(name,src,dest){
        this.name = name;
        this.src = src;
        this.dest = dest;
    }
    
    kmcal()
    {
        if((this.src == 'anna nagar')&&(this.dest == 'koyambedu'))
        {
            return 1 ;
        }
        if((this.src == 'anna nagar')&&(this.dest == 'ashok nagar'))
        {
            return 2 ;
        }
        if((this.src == 'anna nagar')&&(this.dest == 'vadapalani'))
        {
            return 3 ;
        }
        if((this.src == 'anna nagar')&&(this.dest == 'guindy'))
        {
            return 4 ;
        }
    }
    
    calculate()
    {
        let price = 20 * this.kmcal();
        return price;
    }
    
    toString()
    {
        return `Taxi Booked :
        Name : ${this.name}
        Source : ${this.src}
        Destination : ${this.dest}
        Price : Rs.${this.calculate()} for ${this.kmcal()}km`;
    }
}


let customer1 = new uber('Anbu','anna nagar','ashok nagar');
let customer2 = new uber('kaveri','anna nagar','guindy');

console.log(customer1.toString());
console.log(customer2.toString());