module.exports = function (app){

    const ReservasController = {

        listar: function (req,res){
            const collection = require('../db');
            
            (async ()=>{
                const reservas = collection.find
            })();

            
            res.send(reservas);


        }
    }

    return ReservasController;
}