var jsondb = require("../../../db/db.json");
var fs = require("fs");

module.exports = function(app) {
    app.get("/api/notes", function(req, res){
        console.log(jsondb);
        res.json(jsondb);
    });

    app.post("/api/notes", function(req, res){
        var newNote = req.body;
        jsondb.push(newNote);
        console.log(jsondb);
        res.json(newNote);
    });

    app.delete("/api/notes/:id", function(req, res) {
        const index = req.params.id;
        jsondb.splice(index, 1);
        fs.writeFile("../../../db/db.json", jsondb, function(err){
            if(err){
                console.log(err);
            }
        });
    });
}