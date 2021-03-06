/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_Payment = require("../payments/Payment");
var remotepay_BaseResponse = require("../remotepay/BaseResponse");
var base_Signature = require("../base/Signature");

/**
* @constructor
* @augments remotepay.BaseResponse
* @memberof remotepay
*/
var PaymentResponse = function() {
  remotepay_BaseResponse.call(this);
  this._superClass_ = remotepay_BaseResponse;
  this._class_ = PaymentResponse;
  this.payment = undefined;
  this.isSale = false;
  this.isPreAuth = false;
  this.isAuth = false;
  this.signature = undefined;
};

PaymentResponse.prototype = Object.create(remotepay_BaseResponse.prototype);
PaymentResponse.prototype.constructor = PaymentResponse;

/**
* Set the field value
* The payment from the sale
*
* @memberof remotepay.PaymentResponse
* @param {payments.Payment} payment 
*/
PaymentResponse.prototype.setPayment = function(payment) {
  this.payment = payment;
};

/**
* Get the field value
* The payment from the sale
* @memberof remotepay.PaymentResponse
* @return {payments.Payment} 
*/
PaymentResponse.prototype.getPayment = function() {
  return this.payment;
};

/**
* Set the field value
* @memberof remotepay.PaymentResponse
* @param {Boolean} isSale 
*/
PaymentResponse.prototype.setIsSale = function(isSale) {
  this.isSale = isSale;
};

/**
* Get the field value
* @memberof remotepay.PaymentResponse
* @return {Boolean} 
*/
PaymentResponse.prototype.getIsSale = function() {
  return this.isSale;
};

/**
* Set the field value
* @memberof remotepay.PaymentResponse
* @param {Boolean} isPreAuth 
*/
PaymentResponse.prototype.setIsPreAuth = function(isPreAuth) {
  this.isPreAuth = isPreAuth;
};

/**
* Get the field value
* @memberof remotepay.PaymentResponse
* @return {Boolean} 
*/
PaymentResponse.prototype.getIsPreAuth = function() {
  return this.isPreAuth;
};

/**
* Set the field value
* @memberof remotepay.PaymentResponse
* @param {Boolean} isAuth 
*/
PaymentResponse.prototype.setIsAuth = function(isAuth) {
  this.isAuth = isAuth;
};

/**
* Get the field value
* @memberof remotepay.PaymentResponse
* @return {Boolean} 
*/
PaymentResponse.prototype.getIsAuth = function() {
  return this.isAuth;
};

/**
* Set the field value
* @memberof remotepay.PaymentResponse
* @param {base.Signature|Null} signature 
*/
PaymentResponse.prototype.setSignature = function(signature) {
  this.signature = signature;
};

/**
* Get the field value
* @memberof remotepay.PaymentResponse
* @return {base.Signature|Null} 
*/
PaymentResponse.prototype.getSignature = function() {
  return this.signature;
};

PaymentResponse._meta_ =  {fields:  {}};
PaymentResponse._meta_._class_ =  PaymentResponse;
PaymentResponse._meta_._superMeta_ = remotepay_BaseResponse._meta_;
PaymentResponse._meta_.fields["payment"] = {};
PaymentResponse._meta_.fields["payment"].type = payments_Payment;
PaymentResponse._meta_.fields["isSale"] = {};
PaymentResponse._meta_.fields["isSale"].type = Boolean;
PaymentResponse._meta_.fields["isPreAuth"] = {};
PaymentResponse._meta_.fields["isPreAuth"].type = Boolean;
PaymentResponse._meta_.fields["isAuth"] = {};
PaymentResponse._meta_.fields["isAuth"].type = Boolean;
PaymentResponse._meta_.fields["signature"] = {};
PaymentResponse._meta_.fields["signature"].type = base_Signature;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = PaymentResponse;
}

