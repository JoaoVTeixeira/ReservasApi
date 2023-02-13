module.exports = function (app)
{
    const HomeController = {

        index: function (req,res) {
            res.send("olá mundo");
        }

    }


    return HomeController;
};