const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
    {
        base64Image: {
            type: String
        },
        story: {
            type: String,
            required: true, 
        }
    },
    {
        timestamps: true // tao createdAt && updateAt
    }
);

const formModel = mongoose.model("Form", formSchema);

module.exports = formModel;