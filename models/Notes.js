const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users"
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	tag: {
		type: String,
		default: "General"
	},
	date: {
		type: String
	}
});
module.exports = mongoose.model("notes", notesSchema);