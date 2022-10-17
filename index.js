// // console.log("hola mundo")

// const math =  require("./matrh")

// console.log(math.dividir(2,3))
// const os = require('node:os');
// console.log(os.networkInterfaces())
const { unwatchFile } = require('node:fs');
const fs = require('node:fs/promises');


// fs.writeFile("./text.txt","linea uno hola mundo",function(err){
   
//     if(err){
//         console.log("hay un error ")
//     }else{
//         console.log("archibo creado ")
//     }
// })

// fs.readFile("./text.txt",function(error,data){
//     if(error){
//         console.log(error);
//     }
//     if(data){
//         console.log(data.toString());
//     }
// })
const http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{"content-type": "text/html"})
    res.write("<h1>hola mundo</h1>")
    res.end()
}).listen(3000)