const Printer = require('./Printer');
const { exec } = require('child_process');

class LinuxPrinter extends Printer {
  async print(filePath) {
    return new Promise((resolve, reject) => {
      exec(`lp "${filePath}"`, (error, stdout, stderr) => {
        if (error || stderr) {
          reject(error || new Error(stderr));
          return;
        }
        console.log(`File printed successfully: ${stdout}`);
        resolve();
      });
    });
  }
}

module.exports = LinuxPrinter;
