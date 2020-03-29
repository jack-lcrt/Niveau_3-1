const express=require("express");
const app=express();
const bodyParser = require("body-parser");
const listePremier=require("./estPremier");

app.use(bodyParser.json());

app.get("/api",(req,res) => {
	var nb= req.body.nombre;
	if (nb>0){
	res.send({'racine carré:':Math.sqrt(nb),
'liste des nombres premiers:':listePremier(nb)});

}
	
});

app.listen(4000);