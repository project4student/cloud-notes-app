const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const path = require('path');
const auth = require("./routes/auth")
const notes = require("./routes/notes")
require("./dbConn");


const app = express();
const port = process.env.PORT || 3001;
app.use(cors({ origin: "*" }));
const staticPath = path.join(__dirname, "statics");
// const viewsPath = path.join(__dirname, "");


app.use(express.static(staticPath));
// app.set("views", viewsPath);
// app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


app.use("/auth", auth)
app.use("/notes", notes)

app.get("/", (req, res) => {
	res.sendFile(path.join(staticPath, "index.html"));
});

app.listen(port, () => {
	console.log("http://localhost:" + port);
});