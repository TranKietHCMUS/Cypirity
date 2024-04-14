const express = require('express');
const router = express.Router();
const multer = require('multer');
const {registerUser, loginUser, findUser} = require("../Controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:userId", findUser);

// Khởi tạo Multer và cấu hình nơi lưu trữ tệp
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const formModel = require("../Models/formModel");

// Định nghĩa endpoint để tải lên tệp
router.post('/poststory', upload.single('file'), async (req, res) => {
    try {
        const {base64Image, story} = req.body;
        const newForm = new formModel ({
            base64Image, story
        });

        await newForm.save();

        res.status(201).send('File uploaded successfully');
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;