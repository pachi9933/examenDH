const{Movie, sequelize} = require ('../database/models');
const {Op} = require ('sequelize');


module.exports={
    show: (req, res)=>{
        res.render("listadoPeliculas")
    }

    }