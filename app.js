const express = require ("express")
const hbs = require ("hbs");
const app = express();

//Conectar con database//
require ("./config/db.config");

//Configurar Motor renderización (hbs)//
app.set( "view engine", "hbs");
app.set ("views", `${__dirname}/views`);
hbs.registerPartials(__dirname + "/views/partials");

//Support req.body//
app.use (express.urlencoded({extended : true}));

//Configurar static files//
app.use(express.static("public"));

//Routes//
const router = require ("./config/routes.config");
app.use (router);

//Port//
app.listen(3000, () => {
    console.log("Good Beggining!");
});