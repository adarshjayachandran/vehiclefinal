var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var activitySchema = new Schema( {
	
	a_id: Number,
	dateofentry:String,
	device_no:Number,
	rfid_no:String,
	timeofentry:String,
	amount:Number
}),
Activitytbl = mongoose.model('activitytbl', activitySchema);

module.exports = Activitytbl;
