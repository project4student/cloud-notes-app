const mongoose = require("mongoose");
// const mongoURI = "mongodb://localhost:27017/CloudNotesAppDB"
const mongoURI = `mongodb+srv://student4project:DE%4053241716@ramc.izilq.mongodb.net/CloudNotesAppDB?retryWrites=true&w=majority`

mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Connected to db"))
	.catch(err => console.log(err))