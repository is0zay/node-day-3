// npm i node
// npm i express
// npm i express body-parser
// npm i nodemon

const express = require('express');
const bodyParser = require('body-parser');

// Creating instance for express
const app = express();

// create port for server
const port = 3500;

//Middleware to parse request bodies as JSON
app.use(bodyParser.json());

// In-memory data storage
let items = [
    {id:1, name:"Item 1"},
    {id:2, name:"Item 2"},
    {id:3, name:"Item 3"},
];

// GET route for our URL to retrieve all items
app.get("/items", (req,res) => {
	res.json(items);
});

//GET rout to retireve a single item by id
app.get("/items/:id", (req,res) => {
	const id = parseInt(req.params.id);
	const item = items.find((item) => item.id === id);

	if(item){
		res.json(item);
	}else {
		res.status(404).json({error:"Item not found"})
	}
});

//POST rout to create a new item
app.post('/items', (req,res) => {
	const newItem = req.body;
	newItem.id = items.length + 1;
	items.push(newItem);
	res.status(201).json(newItem);
});

//DELETE route to delete item
app.delete('/items/:id', (req,res) =>{
	const id = parseInt(req.params.id);
	const index = items.findIndex((item) => item.id === id);

	if(index === -1) {
		res.status(404).json({error: "item not found"});
	}else {
		const deletedItem = items.splice(index, 1)[0];
		res.json(deletedItem);
	}

});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});