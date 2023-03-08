let a = "ElZero Web School" ;
console.log (a.substring(10,7)) ;
console.log (a.substring(-10,6)) ;//0 = -999
console.log (a.substring(a.length - 1));
console.log(a.length);
console.log(a.substr(0,6))
console.log(a.substr(-6)) 


//اسمع الحلقة رقم 30 و29 كمان مرة و اكتب علشان متكتبتش 
console.log( 10 != "10")
console.log(10 === "10");
console.log(10 !== "10");
console.log(!true)
console.log(10 == "10" || 5 ==="5")
let price = 0
let discount = false
let discountamount = 30 
let countre = "ksha"
if (discount === true) {
    price -= discountamount
} else if (countre == "ksa") {
    price -= 60
}
else {
    console.log( price || "free")
    console.log(price ?? "free")
}
// وصلت للحلقة 35
let name = "ahmed"
console.log(name == "ahmed" ? "mr" : "mrs")
let ab = 10
ab < 10 
? console.log("< 10")
: ab >=10 && a <= 40 
? console.log("10 to 40") 
: ab > 40 
? console.log(" > 40")
: console.log("unknown")
let money = 0 ;
let holiday = 5  ;  
if (holiday == 0 ) {
    money = 5000
    console.log(`my many is ${money}`);
}else if ( holiday == 1 || holiday == 2) {
    money = 3000
    console.log (`my  money is ${money}`)
}else if ( holiday == 3) {
    money = 2000 
    console.log (`my  money is ${money}`)    
} else if ( holiday == 4 ){
    money = 1000 
    console.log (`my  money is ${money}`)
} else {
    money = 0
    console.log (`my  money is ${money}`)
} 
let job = "designer"
let salary = 0
switch (job) {
    case "manger":
        salary = 8000
        console.log(salary)
        break;
    case "it" :
        salary = 6000
        console.log(salary)
        break
    case "support" :
        salary = 6000
        console.log(salary)
        break
    case "developer" :
        salary = 7000 
        console.log(salary)
        break
    case "designer" :
        salary = 7000 
        console.log(salary)
        break
    default:
        salary = 4000
        console.log(salary)  
        break;
}
let ahmed = [ "ahemd" , "mustafa" , "ahmed"]
console.log(ahmed )