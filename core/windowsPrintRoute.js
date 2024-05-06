const express = require('express');
const router = express.Router();
const WindowsPrinter = require('./WindowsPrinter');
const FileManager = require('./FileManager');

const printer = new WindowsPrinter();
const uploadDir = './uploads/';

router.post('/file', async (req, res) => {
  if (!req.files || !req.files.printFile) {
    return res.status(400).send('No file uploaded');
  }

  const printFile = req.files.printFile;
  const tempFilePath = `${uploadDir}${printFile.name}`;

  try {
    // Save the uploaded file
    await FileManager.saveUploadedFile(printFile, tempFilePath);

    // Print the file using Windows-specific logic
    await printer.print(tempFilePath);
    res.status(200).send('File printed successfully');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).send('Error printing');
  } finally {
    // Delete the temporary file
    FileManager.deleteFile(tempFilePath).catch((err) => {
      console.error(`Error deleting temporary file: ${err.message}`);
    });
  }
});

module.exports = router;
