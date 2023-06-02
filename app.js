// Create a server without express

const http = require('http');
const port = process.env.port || 5000;
http
.createServer((req,res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});

	//ADD Routes
	const url = req.url;

	if(url === '/profile') {
		res.write('<p>You are HIM</p>');
		res.write('<p>You are 23 years old</p>');
	}else if (url === '/job') {
		// JSON example
		const work = {
			address: {
				street: "Red Ventures",
				City: "Charlotte, NC"
			},
		};
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.write(JSON.stringify(work));
		res.end();
	}else {
		res.write('<h1>Hello there</h1>');
		res.end();
	}
}).listen(port, ()=>{
	console.log(`Server is listening on port ${port}`)
});

