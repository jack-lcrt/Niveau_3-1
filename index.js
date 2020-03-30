const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const listPrime = require("./estPremier");

app.use(bodyParser.json());

app.get("/api", (req, res) => {
    var nb = req.body.nombre;
    if (nb > 0) {
        res.send({
            'square root:': Math.sqrt(nb),
            'list of prime numbers:': listPrime(nb)
        });

    }

});

app.listen(4000);