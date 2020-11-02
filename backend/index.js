const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Seja bem vindo ao meu app!");
})

app.get("/sobre", function(req,res){
    res.send("Minha pagina sobre");
})

app.get("/blog", function(req,res){
    res.send("Bem Vindo ao meu Blog! ");
})

app.get("/ola", function(req, res){
    res.send("Olá.");
})



app.listen(8081, function(){
    console.log("Server is running..")
});
//localhost:8081