const { exec } = require('child_process');

class WindowsPrinter {
  async print(filePath) {
    return new Promise((resolve, reject) => {
      // Directly use `print` command without specifying a printer name
      const command = `print "${filePath}"`;

      exec(command, (error, stdout, stderr) => {
        if (error || stderr) {
          reject(new Error(`Error printing file: ${stderr || error.message}`));
          return;
        }
        console.log(`File printed successfully: ${stdout}`);
        resolve();
      });
    });
  }
}

module.exports = WindowsPrinter;
