/**
 * Created by Jesse on 3/22/2014.
 */
function ExpenseItem(type,description,amount) {

	this.type = type;
	this.description = description;
	this.amount = amount;
}

ExpenseItem.prototype.isReasonable = function() {
	return this.amount <= 100;
};