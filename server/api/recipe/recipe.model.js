'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RecipeSchema = new Schema({
  recipename: { type: String, required: false },
  description: { type: String, required: false },
  indgredients: { type: String, required: false },
  imagepath: { type: String, required: false },
  videopath: { type: String, required: false },
  userid: {type: String, required: false}
});



module.exports = mongoose.model('Recipe', RecipeSchema);
