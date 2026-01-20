const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.static("public"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const type = req.body.type;
        cb(null, type);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

app.post("/upload", upload.single("video"), (req, res) => {
    res.send("Uploaded");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
