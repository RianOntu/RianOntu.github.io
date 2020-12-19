

let re_phone=/^(\+88)?01[0-9]{9}$/;
let re_mail=/^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
let re_post=/^[0-9]{4}$/;
let inp=prompt(`Please enter your choice by pressing number
1)Phone Number
2)Email
3)Post Code`);
switch(inp)
{
        case "1":
            let phone=prompt("please enter your phone number:");

let val=re_phone.test(phone);
function vaidate(){
    if(val==true){
        console.log("Valid Input!");
        document.write("Valid Input!")
    }
    else{
        console.log("Invalid Input!");
        document.write("Invalid Input!")
    }
}
vaidate();
break;
case "2":
    let email=prompt("please enter your Email:");

let val1=re_mail.test(email);
function vaidate1(){
if(val1==true){
console.log("Valid Input!");
document.write("Valid Input!")
}
else{
console.log("Invalid Input!");
document.write("Invalid Input!")
}
}
vaidate1();
break;
case "3":
    let postcode=prompt("please enter your postal code:");

let val2=re_post.test(postcode);
function vaidate2(){
if(val2==true){
console.log("Valid Input!")
document.write("Valid Input!");
}
else{
console.log("Invalid Input!");
document.write("Invalid Input!")

}
}
vaidate2();
break;


}

