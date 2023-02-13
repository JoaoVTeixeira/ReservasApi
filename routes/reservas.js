module.exports = function (app) {

    var reservas = app.controllers.reservas;
    app.get("/listar", reservas.listar);

}