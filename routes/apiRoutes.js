var db = require("../models/thing.js");

module.exports = function(app) {
  // Get all examples
  app.get("/api/burgers", function(req, res) {
    db.Example.findAll({}).then(function(burgers) {
      res.json(burgers);
    });
  });




  //new request
  app.post("/api/burgers", function(req, res) {
    db.Request.create(req.body).then(function(dbRequest) {
      res.json(burgers)
    })
  })


  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  app.delete("/api/requests/:id", function(req, res) {
    db.Request.destroy({ where: { id: req.params.id } }).then(function(
      dbRequest
    ) {
      res.json(dbRequest);
    });
  });







};
