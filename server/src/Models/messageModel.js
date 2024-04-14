const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
    {
        chatId: String, // _id cua doan Chat giua 2 nguoi
        senderId: String, // _id cua nguoi gui
        text: String,
    },
    {
        timestamps: true,
    }
);

const messageModel = mongoose.model("Message", messageSchema);

module.exports = messageModel;