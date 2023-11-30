const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
    
    book_Name: {
        type: String,
        required: true
    },
    published_Year: {
        type: Number,
        required: true
    },
    book_Price: {
        type: Number,
        required: true,
        min: 0,
        max: 50000
    }
});
module.exports = mongoose.model("book", 
bookSchema);