const fs = require('fs');


const apiKey = process.env.COMBAIN_API_KEY;

if(!apiKey){
  console.log("API key missing. System will exit");
  process.exit(1);
}
else{
  console.log("API Key found!");
}

let body;
try{
  const rawBody = fs.readFileSync('./body.txt','utf8');
  body = JSON.parse(rawBody);
  console.log(body.wifiAccessPoints[0].ssid);
  
}
catch (error) {
  console.log(error.message);
}