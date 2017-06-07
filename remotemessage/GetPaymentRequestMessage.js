/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");

/** Request to retrieve a payment made to a specific device. */
/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var GetPaymentRequestMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = GetPaymentRequestMessage;
  this.setMethod(remotemessage_Method["GET_PAYMENT_REQUEST"]);
  this.externalPaymentId = undefined;
};

GetPaymentRequestMessage.prototype = Object.create(remotemessage_Message.prototype);
GetPaymentRequestMessage.prototype.constructor = GetPaymentRequestMessage;

/**
* Set the field value
* The externalPaymentId used when a payment was created
*
* @memberof remotemessage.GetPaymentRequestMessage
* @param {String} externalPaymentId 
*/
GetPaymentRequestMessage.prototype.setExternalPaymentId = function(externalPaymentId) {
  this.externalPaymentId = externalPaymentId;
};

/**
* Get the field value
* The externalPaymentId used when a payment was created
* @memberof remotemessage.GetPaymentRequestMessage
* @return {String} 
*/
GetPaymentRequestMessage.prototype.getExternalPaymentId = function() {
  return this.externalPaymentId;
};

GetPaymentRequestMessage._meta_ =  {fields:  {}};
GetPaymentRequestMessage._meta_._class_ =  GetPaymentRequestMessage;
GetPaymentRequestMessage._meta_._superMeta_ = remotemessage_Message._meta_;
GetPaymentRequestMessage._meta_.fields["externalPaymentId"] = {};
GetPaymentRequestMessage._meta_.fields["externalPaymentId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = GetPaymentRequestMessage;
}
