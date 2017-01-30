/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_TransactionType = require("../remotepay/TransactionType");
var payments_TipMode = require("../payments/TipMode");
var remotepay_TransactionRequest = require("../remotepay/TransactionRequest");

/**
* @constructor
* @augments remotepay.TransactionRequest
* @memberof remotepay
*/
var SaleRequest = function() {
  remotepay_TransactionRequest.call(this);
  this._superClass_ = remotepay_TransactionRequest;
  this._class_ = SaleRequest;
  this.setType(remotepay_TransactionType["PAYMENT"]);
  this.tippableAmount = undefined;
  this.tipAmount = undefined;
  this.disableCashback = undefined;
  this.disableTipOnScreen = undefined;
  this.taxAmount = undefined;
  this.allowOfflinePayment = undefined;
  this.approveOfflinePaymentWithoutPrompt = undefined;
  this.tipMode = undefined;
};

SaleRequest.prototype = Object.create(remotepay_TransactionRequest.prototype);
SaleRequest.prototype.constructor = SaleRequest;

/**
* Set the field value
* Total amount used when calculating tips
*
* @memberof remotepay.SaleRequest
* @param {Number|Null} tippableAmount must be a long integer, 
*/
SaleRequest.prototype.setTippableAmount = function(tippableAmount) {
  this.tippableAmount = tippableAmount;
};

/**
* Get the field value
* Total amount used when calculating tips
* @memberof remotepay.SaleRequest
* @return {Number|Null} must be a long integer, 
*/
SaleRequest.prototype.getTippableAmount = function() {
  return this.tippableAmount;
};

/**
* Set the field value
* Included tip
*
* @memberof remotepay.SaleRequest
* @param {Number|Null} tipAmount must be a long integer, 
*/
SaleRequest.prototype.setTipAmount = function(tipAmount) {
  this.tipAmount = tipAmount;
};

/**
* Get the field value
* Included tip
* @memberof remotepay.SaleRequest
* @return {Number|Null} must be a long integer, 
*/
SaleRequest.prototype.getTipAmount = function() {
  return this.tipAmount;
};

/**
* Set the field value
* Do not allow cash back
*
* @memberof remotepay.SaleRequest
* @param {Boolean|Null} disableCashback 
*/
SaleRequest.prototype.setDisableCashback = function(disableCashback) {
  this.disableCashback = disableCashback;
};

/**
* Get the field value
* Do not allow cash back
* @memberof remotepay.SaleRequest
* @return {Boolean|Null} 
*/
SaleRequest.prototype.getDisableCashback = function() {
  return this.disableCashback;
};

/**
* Set the field value
* If true, the tip screen will not be displayed on the device, even if the merchant is configured for tips on screen
*
* @memberof remotepay.SaleRequest
* @param {Boolean|Null} disableTipOnScreen 
*/
SaleRequest.prototype.setDisableTipOnScreen = function(disableTipOnScreen) {
  this.disableTipOnScreen = disableTipOnScreen;
};

/**
* Get the field value
* If true, the tip screen will not be displayed on the device, even if the merchant is configured for tips on screen
* @memberof remotepay.SaleRequest
* @return {Boolean|Null} 
*/
SaleRequest.prototype.getDisableTipOnScreen = function() {
  return this.disableTipOnScreen;
};

/**
* Set the field value
* Amount paid in tips
*
* @memberof remotepay.SaleRequest
* @param {Number|Null} taxAmount must be a long integer, 
*/
SaleRequest.prototype.setTaxAmount = function(taxAmount) {
  this.taxAmount = taxAmount;
};

/**
* Get the field value
* Amount paid in tips
* @memberof remotepay.SaleRequest
* @return {Number|Null} must be a long integer, 
*/
SaleRequest.prototype.getTaxAmount = function() {
  return this.taxAmount;
};

/**
* Set the field value
* If true then offline payments can be accepted
*
* @memberof remotepay.SaleRequest
* @param {Boolean|Null} allowOfflinePayment 
*/
SaleRequest.prototype.setAllowOfflinePayment = function(allowOfflinePayment) {
  this.allowOfflinePayment = allowOfflinePayment;
};

/**
* Get the field value
* If true then offline payments can be accepted
* @memberof remotepay.SaleRequest
* @return {Boolean|Null} 
*/
SaleRequest.prototype.getAllowOfflinePayment = function() {
  return this.allowOfflinePayment;
};

/**
* Set the field value
* If true then offline payments will be approved without a prompt
*
* @memberof remotepay.SaleRequest
* @param {Boolean|Null} approveOfflinePaymentWithoutPrompt 
*/
SaleRequest.prototype.setApproveOfflinePaymentWithoutPrompt = function(approveOfflinePaymentWithoutPrompt) {
  this.approveOfflinePaymentWithoutPrompt = approveOfflinePaymentWithoutPrompt;
};

/**
* Get the field value
* If true then offline payments will be approved without a prompt
* @memberof remotepay.SaleRequest
* @return {Boolean|Null} 
*/
SaleRequest.prototype.getApproveOfflinePaymentWithoutPrompt = function() {
  return this.approveOfflinePaymentWithoutPrompt;
};

/**
* Set the field value
* @memberof remotepay.SaleRequest
* @param {payments.TipMode} tipMode 
*/
SaleRequest.prototype.setTipMode = function(tipMode) {
  this.tipMode = tipMode;
};

/**
* Get the field value
* @memberof remotepay.SaleRequest
* @return {payments.TipMode} 
*/
SaleRequest.prototype.getTipMode = function() {
  return this.tipMode;
};

SaleRequest._meta_ =  {fields:  {}};
SaleRequest._meta_.fields["tippableAmount"] = {};
SaleRequest._meta_.fields["tippableAmount"].type = Number;
SaleRequest._meta_.fields["tipAmount"] = {};
SaleRequest._meta_.fields["tipAmount"].type = Number;
SaleRequest._meta_.fields["disableCashback"] = {};
SaleRequest._meta_.fields["disableCashback"].type = Boolean;
SaleRequest._meta_.fields["disableTipOnScreen"] = {};
SaleRequest._meta_.fields["disableTipOnScreen"].type = Boolean;
SaleRequest._meta_.fields["taxAmount"] = {};
SaleRequest._meta_.fields["taxAmount"].type = Number;
SaleRequest._meta_.fields["allowOfflinePayment"] = {};
SaleRequest._meta_.fields["allowOfflinePayment"].type = Boolean;
SaleRequest._meta_.fields["approveOfflinePaymentWithoutPrompt"] = {};
SaleRequest._meta_.fields["approveOfflinePaymentWithoutPrompt"].type = Boolean;
SaleRequest._meta_.fields["tipMode"] = {};
SaleRequest._meta_.fields["tipMode"].type = payments_TipMode;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = SaleRequest;
}

