const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [3, "Name must be more than 3 characters"]
        },
        type: {
            type: String,
            required: [true, "Type is required"],
            minlength: [3, "Type must be more than 3 characters"]
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            minlength: [3, "Description must be more than 3 characters"]
        },
        skill1: {
            type: String,
            minlength: [3, "Skill must be more than 3 characters"]
        },
        skill2: {
            type: String,
            minlength: [3, "Skill must be more than 3 characters"]
        },
        skill3: {
            type: String,
            minlength: [3, "Skill must be more than 3 characters"]
        },
        likes: Number
    },
    {timestamps: true}
);

// Create collection and add schema
const Pet = mongoose.model('Pet', PetSchema);
module.exports = { Pet };

