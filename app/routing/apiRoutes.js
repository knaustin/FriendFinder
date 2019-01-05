var friendData = require("../data/friends");

module.exports = function(app) {

    app.get("/api", function(req, res) {
        res.json(userData);
    });
}

app.post("/api", function(req, res){
    userData.push;
});

