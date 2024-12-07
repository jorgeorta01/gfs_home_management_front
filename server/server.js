const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const cors = require('cors');

PORT=8080;

// connect to db
let db;
(async () => {
	db = await open({
		// filename: '_______.sqlite',   example example example example
		driver: sqlite3.Database
	});
})();

app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(cors());

app.get ("/_______", async (req, res) => {
	const result = await db.all ("SELECT * FROM _______");
	res.json(result);
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));