const express = require('express');
const fileUpload = require('express-fileupload');

const linuxPrintRoute = require('./core/linuxPrintRoute');
const windowsPrintRoute = require('./core/windowsPrintRoute'); // Add Windows printer routes similarly

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(fileUpload());

// Routes
app.use('/print/linux', linuxPrintRoute);
app.use('/print/windows', windowsPrintRoute);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
