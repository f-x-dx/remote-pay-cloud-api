/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_BaseResponse = require("../remotepay/BaseResponse");
var payments_VaultedCard = require("../payments/VaultedCard");

/**
* @constructor
* @augments remotepay.BaseResponse
* @memberof remotepay
*/
var CardInfoResponse = function() {
  remotepay_BaseResponse.call(this);
  this._superClass_ = remotepay_BaseResponse;
  this._class_ = CardInfoResponse;
  this.card = undefined;
};

CardInfoResponse.prototype = Object.create(remotepay_BaseResponse.prototype);
CardInfoResponse.prototype.constructor = CardInfoResponse;

/**
* Set the field value
* The card that was vaulted.
*
* @memberof remotepay.CardInfoResponse
* @param {payments.VaultedCard} card 
*/
CardInfoResponse.prototype.setCard = function(card) {
  this.card = card;
};

/**
* Get the field value
* The card that was vaulted.
* @memberof remotepay.CardInfoResponse
* @return {payments.VaultedCard} 
*/
CardInfoResponse.prototype.getCard = function() {
  return this.card;
};

CardInfoResponse._meta_ =  {fields:  {}};
CardInfoResponse._meta_._class_ =  CardInfoResponse;
CardInfoResponse._meta_._superMeta_ = remotepay_BaseResponse._meta_;
CardInfoResponse._meta_.fields["card"] = {};
CardInfoResponse._meta_.fields["card"].type = payments_VaultedCard;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CardInfoResponse;
}

