const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedHighscores` array in User.js

const highscoreSchema = new Schema({
    score: [
        {
            type: String,
        }
    ]
});

module.exports = highscoreSchema;