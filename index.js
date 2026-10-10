const apiKey = process.env.COMBAIN_API_KEY;

if(!apiKey){
  console.log("API key missing. System will exit");
  process.exit(1);
}
else{
  console.log("API Key found!")
}