function whatShallIWear(temp){
    if (temp < 60) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log("Wear a sweater");
    } else {
        console.log("Wear a t-shirt");
    }
}

whatShallIWear(50);
whatShallIWear(80);
whatShallIWear(60);

function calculateArea(r) {
    var area;
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r * r;
        return area;
    }
}

var radius = 10;

var theArea = calculateArea(radius);

console.log("The area is: " + theArea)

function printName(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    return fullName
}

console.log('My full name is ' + printName('Miguel Angelo', 'Basinillo'))