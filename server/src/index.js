const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const userRoute = require("./Routes/userRoute");
const storyRoute = require("./Routes/storyRoute");
const messageRoute = require("./Routes/messageRoute");
const multer = require('multer');
const path = require('path');
require("dotenv").config();

app.use(express.json()); // cho phep nhan va gui du lieu .json
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/showstories", storyRoute);
app.use("/api/messages", messageRoute);

const PORT = process.env.PORT || 3000; // dat cong tu dong hoac 3000
const databaseURL = process.env.DATABASE_URL;
app.listen(PORT, (req, res) => console.log(`Server running on port: ${PORT}`));

mongoose.connect(databaseURL)
.then(() => console.log("MongoDB connection established!"))
.catch((err) => console.log("MongoDB connection failed: ", error.message));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads'); // Specify the directory where files will be saved
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage });
  
  app.post('/users/uploads', upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
  
    const textData = req.body.textData;
    console.log('File uploaded:', req.file);
    console.log('Text data:', textData);
  
    res.send('File and text data uploaded successfully.');
  });
  
