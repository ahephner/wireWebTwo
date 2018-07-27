class flip {
    constructor(name, weight, price, size){
        this.name = name; 
        this.weight = weight;
        this.price = price; 
        this.size = size; 
    }
}


let trek = new flip('domane', 12, 1500, 61 ); 

console.log(trek); 

let one = document.querySelector('.Item1')
//get divs for text display
var logIn = document.querySelector('.info'); 
var byStyle = document.querySelector('.look'); 
var vendor = document.querySelector('.vendor'); 
var inventory = document.querySelector('.inventory')
//grab login info 
var logBTN = document.getElementById('logIn');
var user = document.getElementById('user');
var email = document.getElementById('email'); 
var welcome = document.getElementById('welcome'); 

function log(){
    logIn.style.visibility = 'visible'; 
    console.log('hey')
    
}
function out(){
    logIn.style.visibility ='hidden'; 
}

function test(){

    user.value =''; 
    email.value = '';
    
}

function see(){
   byStyle.style.visibility = 'visible'; 
   console.log('hey')
    
}
function out1(){
    byStyle.style.visibility ='hidden'; 
}

function add(){
    vendor.style.visibility = 'visible';
}
function out3(){
    vendor.style.visibility ='hidden'; 
}
function out5(){
    inventory.style.visibility ='hidden'; 
}

function add1(){
    inventory.style.visibility = 'visible';
}