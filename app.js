// Import dependencies and setup Express
const express = require('express');
const QRCode = require('qrcode'); // Corrected package name
const app = express();
const PORT = 3000;

// Define QR Generation route
app.get('/qrcode', (req, res) => {
    // Define the URL to convert into a QR code
    const url = 'https://www.example.com';

    // Convert URL to a Data URL (QR code image)
    QRCode.toDataURL(url, (err, qrCodeUrl) => {
        // Handle QR code generation errors
        if (err) {
            // If there is an error, return a '500 Internal Server Error' response
            return res.status(500).send('Internal Server Error');
        }

        // Send an HTML response containing the generated QR code
        res.send(`
            <!DOCTYPE HTML>
            <html>
            <head>
                <title>QR Code Generator</title>
            </head>
            <body>
                <h1>QR Code Generator</h1>
                <img src="${qrCodeUrl}" alt="QR Code">
                <p>Scan the QR Code to visit the website</p>
            </body>
            </html>
        `);
    });
});

// Start the server and listen to requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
