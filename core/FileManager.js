const fs = require('fs');

class FileManager {
  static saveUploadedFile(upload, destinationPath) {
    return new Promise((resolve, reject) => {
      upload.mv(destinationPath, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

  static deleteFile(filePath) {
    return new Promise((resolve, reject) => {
      fs.unlink(filePath, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }
}

module.exports = FileManager;
