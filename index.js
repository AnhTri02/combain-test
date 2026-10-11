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
//body
try{
  const rawBody = fs.readFileSync('./body.txt','utf8'); //läs filen body
  body = JSON.parse(rawBody); //gör om till objekt JS kan läsa
  console.log(Object.keys(body));
}
catch (error) {
  console.log(error.message);
}


//skicka anrop
async function sendRequest(){
  const url = `https://apiv2.combain.com?key=${apiKey}`; //apiURL (endpoint)
  
  try{
    const response = await fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    });

    if(!response.ok){
      throw new Error(`Response status: ${response.status}`)
    }

    //resultatet
    const result = await response.json(); //response
    console.log(result);
  }
  catch(error){
    console.log(error.message);
  }

}