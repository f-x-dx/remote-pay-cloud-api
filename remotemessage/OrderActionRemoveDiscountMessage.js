/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");
var remotemessage_RemoveDiscountAction = require("../remotemessage/RemoveDiscountAction");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var OrderActionRemoveDiscountMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = OrderActionRemoveDiscountMessage;
  this.setMethod(remotemessage_Method["ORDER_ACTION_REMOVE_DISCOUNT"]);
  this.removeDiscountAction = undefined;
};

OrderActionRemoveDiscountMessage.prototype = Object.create(remotemessage_Message.prototype);
OrderActionRemoveDiscountMessage.prototype.constructor = OrderActionRemoveDiscountMessage;

/**
* Set the field value
* @memberof remotemessage.OrderActionRemoveDiscountMessage
* @param {remotemessage.RemoveDiscountAction} removeDiscountAction 
*/
OrderActionRemoveDiscountMessage.prototype.setRemoveDiscountAction = function(removeDiscountAction) {
  this.removeDiscountAction = removeDiscountAction;
};

/**
* Get the field value
* @memberof remotemessage.OrderActionRemoveDiscountMessage
* @return {remotemessage.RemoveDiscountAction} 
*/
OrderActionRemoveDiscountMessage.prototype.getRemoveDiscountAction = function() {
  return this.removeDiscountAction;
};

OrderActionRemoveDiscountMessage._meta_ =  {fields:  {}};
OrderActionRemoveDiscountMessage._meta_.fields["removeDiscountAction"] = {};
OrderActionRemoveDiscountMessage._meta_.fields["removeDiscountAction"].type = remotemessage_RemoveDiscountAction;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = OrderActionRemoveDiscountMessage;
}
