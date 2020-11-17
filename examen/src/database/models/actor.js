const {sequelize, DataTypes}=require('sequelize');
const movie = require('./movie');


module.exports=(sequelize, DataTypes)=>{
    const actor = sequelize.define ('Actor',{
        first_name:DataTypes.STRING,
        last_name:DataTypes.STRING,
        rating:DataTypes.INTEGER,
        

        });
        actor.associate = models=>{
            actor.belongsToMany(models.Movie, {
               
                through:"actor_movie",
            });
        };
        
        
        return actor;
}

