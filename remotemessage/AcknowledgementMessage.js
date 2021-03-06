/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var AcknowledgementMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = AcknowledgementMessage;
  this.setMethod(remotemessage_Method["ACK"]);
  this.sourceMessageId = undefined;
};

AcknowledgementMessage.prototype = Object.create(remotemessage_Message.prototype);
AcknowledgementMessage.prototype.constructor = AcknowledgementMessage;

/**
* Set the field value
* The remote message id that is being acknowledged
*
* @memberof remotemessage.AcknowledgementMessage
* @param {String} sourceMessageId 
*/
AcknowledgementMessage.prototype.setSourceMessageId = function(sourceMessageId) {
  this.sourceMessageId = sourceMessageId;
};

/**
* Get the field value
* The remote message id that is being acknowledged
* @memberof remotemessage.AcknowledgementMessage
* @return {String} 
*/
AcknowledgementMessage.prototype.getSourceMessageId = function() {
  return this.sourceMessageId;
};

AcknowledgementMessage._meta_ =  {fields:  {}};
AcknowledgementMessage._meta_._class_ =  AcknowledgementMessage;
AcknowledgementMessage._meta_._superMeta_ = remotemessage_Message._meta_;
AcknowledgementMessage._meta_.fields["sourceMessageId"] = {};
AcknowledgementMessage._meta_.fields["sourceMessageId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = AcknowledgementMessage;
}

