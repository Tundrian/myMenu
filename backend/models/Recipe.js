const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    mealtime: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Recipe", RecipeSchema)