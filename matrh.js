
function add(x ,y ){
    return x + y
   }
function substract(x ,y){
       return x - y
   }
   
function multiplicar(x ,y){
       return x * y
   }
function dividir(x ,y){
       if(x==0){
           console.log("no se puede dividir por cerp")
       }else{
           return x / y
       }
       
   }

exports.add = add

exports.substract = exports.substract = add


exports.multiplicar = multiplicar

exports.dividir = dividir

