const{Movie,Genre,Actor, sequelize} = require ('../database/models');

const {Op} = require ('sequelize');


module.exports={

    all:async (req,res)=>{
        try {
            const moviesjson=await Movie.findAll({include:["Genre", "actores"]}) ;
         //res.json (moviesjson);
         res.render("index",{moviesjson});
       //como poner en la vista genre y actores??
}
        
catch (error){
    console.log(error);

}
    
 
},
    detail: async (req,res)=>{
        try {
            const moviesjson = await Movie.findByPk(req.params.id);
            res.render ("detail", { moviesjson})
           
        }
        catch (error){console.log(error);
        }
    },

    new: async (req, res)=>{
        try{
            const moviesjson=await Movie.findAll({
                order:[[
                    "release_date", "ASC"
                ]], limit:5
            });
          
       res.render ("new",{moviesjson});
}
        
catch (error){
    console.log(error);


        }
    },
    recomended: async (req, res)=>{
        try {
            const moviesjson=await Movie.findAll(
            {
                where: {
                    rating : { [Op.gte] : 8} 
                }
                
            });
       
         res.render("recomended",{moviesjson});
       
}
        
catch (error){
    console.log(error);

}    
 


},
    buscar: function (req, res){
   
   
     res.render("search");
   

    

},
     search: async (req, res)=>{
    try {
        const moviesSearch = await Movies.findAll({
            where: {
                title: {[Op.like]: "%"+req.body.title+"%"} 
            }
            
        });
   
     res.render("search",{moviesSearch});
   
}
    
           catch (error){
           console.log(error);

}    

},


  
    create: async (req, res)=>{
        try{ 
        const generos = await Genre.findAll();
        const actores = await Actor.findAll();

        res.render("createMovie",{generos,actores} );
    }
        catch (error){
            console.log(error);
         
            
    }
    
},
     store: async (req, res)=>{
        try{
       
        const newMovie= await Movie.create(req.body);
        await newMovie.addActores(req.body.actores);

      //  console.log(req.body);
        res.redirect("/");

      //  res.render("createMovie",{generos});
    }
        catch (error){
            console.log(error);
         
    }  


},
    update: async (req, res)=>{
       try{  
            const movieId = req.params.id;
            const toEdit = await Movie.findByPk(movieId, {include :["Genre","actores"]});
            const generos = await Genre.findAll();
            const actores = await Actor.findAll();


             //res.send(toEdit);
            res.render("updateMovie", {toEdit,generos,actores} );
         
    }

             catch (error){
              console.log(error);
 
 
 
 

 }


},
       change : async (req, res)=>{ 
    try{
        const movieId = req.params.id;
        
        const changeMovie = await Movie.findByPk(movieId, {include:["Genre","actores"]});
        await changeMovie.removeActores(changeMovie.actores);
        changeMovie.addActores (req.body.actores);
        await changeMovie.update (req.body);
         //res.send(toEdit);
        res.render("updateMovie", {toEdit,generos,actores} );


    }
    catch (error){
        console.log(error);
     
}

},


//,

//   destroy :  async (req,res)=>{
//       try{ 
//        const movieId=req.params.id;
//       const toDelete=await Movie.findByPk(movieId,{include:[genre, actors]});
//        await toDelete.removeActors(toDelete.Actors);
//        await toDelete.destroy();
//        res.redirect("/index");

//}
//catch (error){
//    console.log(error);
 
//    }

//  }



} 
  