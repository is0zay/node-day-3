const express = require('express');
const axios = require('axios');

const app = express();
const port = 7000;

app.get("/", 
async(rec,res) => {
	const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
  params: {count: '5'},
  headers: {
    'X-RapidAPI-Key': 'f0f9c103b4mshf65c80b6eab160fp1e155ajsna30f5f819cb6',
    'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
});
app.listen(port, ()=> {
	console.log(`Server is running on port ${port}`);
})