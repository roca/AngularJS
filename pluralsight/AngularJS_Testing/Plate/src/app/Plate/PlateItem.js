/**
 * Created by Jesse on 3/22/2014.
 */
function PlateItem(type,description,amount) {

	this.type = type;
	this.description = description;
	this.amount = amount;
}

PlateItem.prototype.isReasonable = function() {
	return this.amount <= 100;
};