'use strict';

var _ = require('lodash');
var Recipe = require('./recipe.model');

// Get list of contactuss
exports.index = function(req, res) {
  Recipe.find(function (err, recipes) {
    if(err) { return handleError(res, err); }
    return res.json(200, recipes);
  });
};

// Get a single recipe
exports.show = function(req, res) {
  Recipe.findById(req.params.id, function (err, recipes) {
    if(err) { return handleError(res, err); }
    if(!recipes) { return res.send(404); }
    return res.json(recipes);
  });
};

// Creates a new recipe in the DB.
exports.create = function(req, res) {

	//login(' user :'+$scope.user);
  console.log("I am in the server controller");
	 var recipe = new Recipe({
     recipename: req.body.recipename,
     description: req.body.description,
     indgredients:req.body.indgredients,
     imagepath:req.body.imagepath,
     videopath:req.body.videopath,
     userid:req.body.userid
  });

  recipe.save(function (err, recipes) {
    if (err) { return next(err) }
    res.status(201).json(recipes)
  });

/*  Recipe.create(req.body, function(err, recipe) {
    if(err) { return handleError(res, err); }
    return res.json(201, recipe);
  }); */
};

// Updates an existing recipe in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Recipe.findById(req.params.id, function (err, recipes) {
    if (err) { return handleError(res, err); }
    if(!recipes) { return res.send(404); }
    var updated = _.merge(recipes, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, recipes);
    });
  });
};

// Deletes a recipe from the DB.
exports.destroy = function(req, res) {
  Recipe.findById(req.params.id, function (err, recipes) {
    if(err) { return handleError(res, err); }
    if(!recipes) { return res.send(404); }
    recipes.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
