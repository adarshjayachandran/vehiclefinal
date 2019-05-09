var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var accntSchema = new Schema( {
	
	ua_id: Number,
	fu_id: Number,
	balance:Number
}),
Useraccountstbl = mongoose.model('useraccountstbl', accntSchema);

module.exports = Useraccountstbl;