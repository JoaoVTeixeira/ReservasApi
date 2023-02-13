module.exports = function (app){

    const ReservasController = {

        listar: function (req,res){
            const collection = app.collection;

            (async ()=>{
                const reservas = collection.find().toArray();
            })();

            
            res.send(reservas);


        }
    }

    return ReservasController;
}