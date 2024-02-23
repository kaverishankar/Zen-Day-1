class circle
{
    constructor(radius,color)
    {
        this.radius = 1.0;
        this.color = 'red';
    }
    getRadius()
    {
        return this.radius;
    }
    setRadius(in_rad)
    {
        this.radius = in_rad ;
    }
    getColor()
    {
        return this.color;
    }
    setColor(in_col)
    {
        this.color= in_col ;
    }
    toString()
    {
        return `Circle [radius = ${this.radius} , color = ${this.color} ]`;
    }
    getArea()
    {
        let area = 3.14 *(this.radius * this.radius);
        return `Area = ${area}`;
    }
    getCircumference()
    {
        let circum = 2* 3.14 * this.radius;
        return `Circumference = ${circum}`;
    }
}

let check = new circle();
let check1 = new circle(1.5);
let check3 = new circle(2.0,'green');
console.log(check.getRadius());
check.setRadius(2.5);
console.log(check.getColor());
check.setColor('white');
console.log(check.toString());
console.log(check.getArea());
console.log(check.getCircumference());



