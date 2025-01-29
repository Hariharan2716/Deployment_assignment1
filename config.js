// lod the dotenv package
require('dotenv').config();

// check if dotenv loaded the variables
console.log("Loaded SERVER_SECRET:", process.env.SERVER_SECRET);

//Access environment variables
const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KALVIAN === 'true', 

};

module.exports = config;

//Log the variables (Optional for testing)
console.log(config);


