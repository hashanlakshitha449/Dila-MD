const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ELUniYaC#Zy9rDx0H8cmwKMTeDgHSPM--m5wbD8hwE0cegBsVUfQ",
MONGODB: process.env.MONGODB || "mongodb://mongo:PklzcEZxqrKzXyVpfynyxRkBXGdHIqdR@junction.proxy.rlwy.net:43250",
};
