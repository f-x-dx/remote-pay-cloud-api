/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var device_DeviceProvisionState = require("../device/DeviceProvisionState");
var base_Reference = require("../base/Reference");

/**
* @constructor
* @memberof device
*/
var DeviceProvision = function() {
  this._class_ = DeviceProvision;
  this.id = undefined;
  this.deviceRef = undefined;
  this.state = undefined;
  this.lastActivationCode = undefined;
  this.activationCode = undefined;
  this.emailSent = undefined;
  this.hasShipment = undefined;
  this.serialNumber = undefined;
  this.merchant = undefined;
  this.deviceType = undefined;
  this.provisionedTime = undefined;
  this.activatedTime = undefined;
  this.reseller = undefined;
  this.currentRom = undefined;
  this.currentSecureBoardRom = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof device.DeviceProvision
* @param {String} id 
*/
DeviceProvision.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof device.DeviceProvision
* @return {String} 
*/
DeviceProvision.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* @memberof device.DeviceProvision
* @param {base.Reference} deviceRef 
*/
DeviceProvision.prototype.setDeviceRef = function(deviceRef) {
  this.deviceRef = deviceRef;
};

/**
* Get the field value
* @memberof device.DeviceProvision
* @return {base.Reference} 
*/
DeviceProvision.prototype.getDeviceRef = function() {
  return this.deviceRef;
};

/**
* Set the field value
* @memberof device.DeviceProvision
* @param {device.DeviceProvisionState} state 
*/
DeviceProvision.prototype.setState = function(state) {
  this.state = state;
};

/**
* Get the field value
* @memberof device.DeviceProvision
* @return {device.DeviceProvisionState} 
*/
DeviceProvision.prototype.getState = function() {
  return this.state;
};

/**
* Set the field value
* @memberof device.DeviceProvision
* @param {String} lastActivationCode 
*/
DeviceProvision.prototype.setLastActivationCode = function(lastActivationCode) {
  this.lastActivationCode = lastActivationCode;
};

/**
* Get the field value
* @memberof device.DeviceProvision
* @return {String} 
*/
DeviceProvision.prototype.getLastActivationCode = function() {
  return this.lastActivationCode;
};

/**
* Set the field value
* @memberof device.DeviceProvision
* @param {String} activationCode 
*/
DeviceProvision.prototype.setActivationCode = function(activationCode) {
  this.activationCode = activationCode;
};

/**
* Get the field value
* @memberof device.DeviceProvision
* @return {String} 
*/
DeviceProvision.prototype.getActivationCode = function() {
  return this.activationCode;
};

/**
* Set the field value
* @memberof device.DeviceProvision
* @param {Boolean} emailSent 
*/
DeviceProvision.prototype.setEmailSent = function(emailSent) {
  this.emailSent = emailSent;
};

/**
* Get the field value
* @memberof device.DeviceProvision
* @return {Boolean} 
*/
DeviceProvision.prototype.getEmailSent = function() {
  return this.emailSent;
};

/**
* Set the field value
* @memberof device.DeviceProvision
* @param {Boolean} hasShipment 
*/
DeviceProvision.prototype.setHasShipment = function(hasShipment) {
  this.hasShipment = hasShipment;
};

/**
* Get the field value
* @memberof device.DeviceProvision
* @return {Boolean} 
*/
DeviceProvision.prototype.getHasShipment = function() {
  return this.hasShipment;
};

/**
* Set the field value
* @memberof device.DeviceProvision
* @param {String} serialNumber 
*/
DeviceProvision.prototype.setSerialNumber = function(serialNumber) {
  this.serialNumber = serialNumber;
};

/**
* Get the field value
* @memberof device.DeviceProvision
* @return {String} 
*/
DeviceProvision.prototype.getSerialNumber = function() {
  return this.serialNumber;
};

/**
* Set the field value
* @memberof device.DeviceProvision
* @param {base.Reference} merchant 
*/
DeviceProvision.prototype.setMerchant = function(merchant) {
  this.merchant = merchant;
};

/**
* Get the field value
* @memberof device.DeviceProvision
* @return {base.Reference} 
*/
DeviceProvision.prototype.getMerchant = function() {
  return this.merchant;
};

/**
* Set the field value
* @memberof device.DeviceProvision
* @param {String} deviceType 
*/
DeviceProvision.prototype.setDeviceType = function(deviceType) {
  this.deviceType = deviceType;
};

/**
* Get the field value
* @memberof device.DeviceProvision
* @return {String} 
*/
DeviceProvision.prototype.getDeviceType = function() {
  return this.deviceType;
};

/**
* Set the field value
* @memberof device.DeviceProvision
* @param {Number} provisionedTime must be a long integer
*/
DeviceProvision.prototype.setProvisionedTime = function(provisionedTime) {
  this.provisionedTime = provisionedTime;
};

/**
* Get the field value
* @memberof device.DeviceProvision
* @return {Number} must be a long integer
*/
DeviceProvision.prototype.getProvisionedTime = function() {
  return this.provisionedTime;
};

/**
* Set the field value
* @memberof device.DeviceProvision
* @param {Number} activatedTime must be a long integer
*/
DeviceProvision.prototype.setActivatedTime = function(activatedTime) {
  this.activatedTime = activatedTime;
};

/**
* Get the field value
* @memberof device.DeviceProvision
* @return {Number} must be a long integer
*/
DeviceProvision.prototype.getActivatedTime = function() {
  return this.activatedTime;
};

/**
* Set the field value
* @memberof device.DeviceProvision
* @param {base.Reference} reseller 
*/
DeviceProvision.prototype.setReseller = function(reseller) {
  this.reseller = reseller;
};

/**
* Get the field value
* @memberof device.DeviceProvision
* @return {base.Reference} 
*/
DeviceProvision.prototype.getReseller = function() {
  return this.reseller;
};

/**
* Set the field value
* @memberof device.DeviceProvision
* @param {base.Reference} currentRom 
*/
DeviceProvision.prototype.setCurrentRom = function(currentRom) {
  this.currentRom = currentRom;
};

/**
* Get the field value
* @memberof device.DeviceProvision
* @return {base.Reference} 
*/
DeviceProvision.prototype.getCurrentRom = function() {
  return this.currentRom;
};

/**
* Set the field value
* @memberof device.DeviceProvision
* @param {base.Reference} currentSecureBoardRom 
*/
DeviceProvision.prototype.setCurrentSecureBoardRom = function(currentSecureBoardRom) {
  this.currentSecureBoardRom = currentSecureBoardRom;
};

/**
* Get the field value
* @memberof device.DeviceProvision
* @return {base.Reference} 
*/
DeviceProvision.prototype.getCurrentSecureBoardRom = function() {
  return this.currentSecureBoardRom;
};

/**
* @memberof device.DeviceProvision
* @private
*/
DeviceProvision.prototype.getMetaInfo = function(fieldName) {
  var curclass = this._class_;
  do {
    var fieldMetaInfo = curclass._meta_.fields[fieldName];
    if(fieldMetaInfo) {
      return fieldMetaInfo;
    }
    if(curclass._meta_._superMeta_) {
      curclass = curclass._meta_._superMeta_._class_;
    } else {
      curclass = null;
    }
  } while(curclass);
  return null;
};

DeviceProvision.prototype.toString = function() {
  return JSON.stringify(this);
};

DeviceProvision._meta_ =  {fields:  {}};
DeviceProvision._meta_._class_ =  DeviceProvision;
DeviceProvision._meta_.fields["id"] = {};
DeviceProvision._meta_.fields["id"].type = String;
DeviceProvision._meta_.fields["deviceRef"] = {};
DeviceProvision._meta_.fields["deviceRef"].type = base_Reference;
DeviceProvision._meta_.fields["state"] = {};
DeviceProvision._meta_.fields["state"].type = device_DeviceProvisionState;
DeviceProvision._meta_.fields["lastActivationCode"] = {};
DeviceProvision._meta_.fields["lastActivationCode"].type = String;
DeviceProvision._meta_.fields["activationCode"] = {};
DeviceProvision._meta_.fields["activationCode"].type = String;
DeviceProvision._meta_.fields["emailSent"] = {};
DeviceProvision._meta_.fields["emailSent"].type = Boolean;
DeviceProvision._meta_.fields["hasShipment"] = {};
DeviceProvision._meta_.fields["hasShipment"].type = Boolean;
DeviceProvision._meta_.fields["serialNumber"] = {};
DeviceProvision._meta_.fields["serialNumber"].type = String;
DeviceProvision._meta_.fields["merchant"] = {};
DeviceProvision._meta_.fields["merchant"].type = base_Reference;
DeviceProvision._meta_.fields["deviceType"] = {};
DeviceProvision._meta_.fields["deviceType"].type = String;
DeviceProvision._meta_.fields["provisionedTime"] = {};
DeviceProvision._meta_.fields["provisionedTime"].type = Number;
DeviceProvision._meta_.fields["activatedTime"] = {};
DeviceProvision._meta_.fields["activatedTime"].type = Number;
DeviceProvision._meta_.fields["reseller"] = {};
DeviceProvision._meta_.fields["reseller"].type = base_Reference;
DeviceProvision._meta_.fields["currentRom"] = {};
DeviceProvision._meta_.fields["currentRom"].type = base_Reference;
DeviceProvision._meta_.fields["currentSecureBoardRom"] = {};
DeviceProvision._meta_.fields["currentSecureBoardRom"].type = base_Reference;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = DeviceProvision;
}

