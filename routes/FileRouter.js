const express = require("express");
const multer = require("multer");
const File = require("../models/File");

const fileRouter = express.Router();

const storage = multer.memoryStorage(); // Use memory storage to keep the file in memory
const upload = multer({
  storage,
  limits: {
    fileSize: 200 * 1024, // 200kb in bytes
  },
});

fileRouter.post("/updateFile", upload.any(), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    let { id, type, base64 } = req.body;
    const updatedFile = await File.findByIdAndUpdate(id, { id, type, base64 });
    if (!updatedFile) {
      return res.send({
        data: {
          status: `File with ID ${id} not found`,
        },
      });
    }
    res.send({
      data: {
        status: "success",
      },
    });
  } catch (err) {
    console.log("errrr");
    res.send({
      data: {
        status: "Failed!!!",
      },
    });
  }
});

module.exports = fileRouter;
