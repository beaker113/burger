module.exports = function(sequelize, DataTypes) {
    var burgers = sequelize.define("Example", {
      burger_name: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN
      
      
    })
    return burgers;
   
    
  
  
   }
  