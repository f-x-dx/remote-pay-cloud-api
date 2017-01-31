/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var order_HoursAvailable = require("../order/HoursAvailable");
var hours_HoursSet = require("../hours/HoursSet");
var base_Reference = require("../base/Reference");
var order_CustomerIdMethod = require("../order/CustomerIdMethod");

/**
* @constructor
* @memberof order
*/
var OrderType = function() {
  this._class_ = OrderType;
  this.id = undefined;
  this.labelKey = undefined;
  this.label = undefined;
  this.taxable = false;
  this.isDefault = false;
  this.filterCategories = false;
  this.isHidden = false;
  this.fee = undefined;
  this.minOrderAmount = undefined;
  this.maxOrderAmount = undefined;
  this.maxRadius = undefined;
  this.avgOrderTime = undefined;
  this.hoursAvailable = undefined;
  this.customerIdMethod = undefined;
  this.isDeleted = false;
  this.systemOrderTypeId = undefined;
  this.hours = undefined;
  this.categories = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof order.OrderType
* @param {String} id 
*/
OrderType.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof order.OrderType
* @return {String} 
*/
OrderType.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* Label Key
*
* @memberof order.OrderType
* @param {String} labelKey 
*/
OrderType.prototype.setLabelKey = function(labelKey) {
  this.labelKey = labelKey;
};

/**
* Get the field value
* Label Key
* @memberof order.OrderType
* @return {String} 
*/
OrderType.prototype.getLabelKey = function() {
  return this.labelKey;
};

/**
* Set the field value
* Label Key
*
* @memberof order.OrderType
* @param {String} label 
*/
OrderType.prototype.setLabel = function(label) {
  this.label = label;
};

/**
* Get the field value
* Label Key
* @memberof order.OrderType
* @return {String} 
*/
OrderType.prototype.getLabel = function() {
  return this.label;
};

/**
* Set the field value
* If this order type is taxable
*
* @memberof order.OrderType
* @param {Boolean} taxable 
*/
OrderType.prototype.setTaxable = function(taxable) {
  this.taxable = taxable;
};

/**
* Get the field value
* If this order type is taxable
* @memberof order.OrderType
* @return {Boolean} 
*/
OrderType.prototype.getTaxable = function() {
  return this.taxable;
};

/**
* Set the field value
* If this order type is the default
*
* @memberof order.OrderType
* @param {Boolean} isDefault 
*/
OrderType.prototype.setIsDefault = function(isDefault) {
  this.isDefault = isDefault;
};

/**
* Get the field value
* If this order type is the default
* @memberof order.OrderType
* @return {Boolean} 
*/
OrderType.prototype.getIsDefault = function() {
  return this.isDefault;
};

/**
* Set the field value
* If set to false, then this order type includes all of the merchant's categories. Otherwise, it only contains the categories defined in the "categories" field on this object.
*
* @memberof order.OrderType
* @param {Boolean} filterCategories 
*/
OrderType.prototype.setFilterCategories = function(filterCategories) {
  this.filterCategories = filterCategories;
};

/**
* Get the field value
* If set to false, then this order type includes all of the merchant's categories. Otherwise, it only contains the categories defined in the "categories" field on this object.
* @memberof order.OrderType
* @return {Boolean} 
*/
OrderType.prototype.getFilterCategories = function() {
  return this.filterCategories;
};

/**
* Set the field value
* If this order type is hidden on the register
*
* @memberof order.OrderType
* @param {Boolean} isHidden 
*/
OrderType.prototype.setIsHidden = function(isHidden) {
  this.isHidden = isHidden;
};

/**
* Get the field value
* If this order type is hidden on the register
* @memberof order.OrderType
* @return {Boolean} 
*/
OrderType.prototype.getIsHidden = function() {
  return this.isHidden;
};

/**
* Set the field value
* The price of a fee added to this order type, not fully implemented at this time.
*
* @memberof order.OrderType
* @param {Null|Number} fee must be a long integer
*/
OrderType.prototype.setFee = function(fee) {
  this.fee = fee;
};

/**
* Get the field value
* The price of a fee added to this order type, not fully implemented at this time.
* @memberof order.OrderType
* @return {Null|Number} must be a long integer
*/
OrderType.prototype.getFee = function() {
  return this.fee;
};

/**
* Set the field value
* The minimum amount required for an order to be placed
*
* @memberof order.OrderType
* @param {Null|Number} minOrderAmount must be a long integer
*/
OrderType.prototype.setMinOrderAmount = function(minOrderAmount) {
  this.minOrderAmount = minOrderAmount;
};

/**
* Get the field value
* The minimum amount required for an order to be placed
* @memberof order.OrderType
* @return {Null|Number} must be a long integer
*/
OrderType.prototype.getMinOrderAmount = function() {
  return this.minOrderAmount;
};

/**
* Set the field value
* The maximum amount for an order allowed
*
* @memberof order.OrderType
* @param {Null|Number} maxOrderAmount must be a long integer
*/
OrderType.prototype.setMaxOrderAmount = function(maxOrderAmount) {
  this.maxOrderAmount = maxOrderAmount;
};

/**
* Get the field value
* The maximum amount for an order allowed
* @memberof order.OrderType
* @return {Null|Number} must be a long integer
*/
OrderType.prototype.getMaxOrderAmount = function() {
  return this.maxOrderAmount;
};

/**
* Set the field value
* The maximum radius allowed for an order (i.e. delivery)
*
* @memberof order.OrderType
* @param {Null|Number} maxRadius must be a long integer
*/
OrderType.prototype.setMaxRadius = function(maxRadius) {
  this.maxRadius = maxRadius;
};

/**
* Get the field value
* The maximum radius allowed for an order (i.e. delivery)
* @memberof order.OrderType
* @return {Null|Number} must be a long integer
*/
OrderType.prototype.getMaxRadius = function() {
  return this.maxRadius;
};

/**
* Set the field value
* The average time it takes to complete the order
*
* @memberof order.OrderType
* @param {Null|Number} avgOrderTime must be a long integer
*/
OrderType.prototype.setAvgOrderTime = function(avgOrderTime) {
  this.avgOrderTime = avgOrderTime;
};

/**
* Get the field value
* The average time it takes to complete the order
* @memberof order.OrderType
* @return {Null|Number} must be a long integer
*/
OrderType.prototype.getAvgOrderTime = function() {
  return this.avgOrderTime;
};

/**
* Set the field value
* @memberof order.OrderType
* @param {order.HoursAvailable} hoursAvailable 
*/
OrderType.prototype.setHoursAvailable = function(hoursAvailable) {
  this.hoursAvailable = hoursAvailable;
};

/**
* Get the field value
* @memberof order.OrderType
* @return {order.HoursAvailable} 
*/
OrderType.prototype.getHoursAvailable = function() {
  return this.hoursAvailable;
};

/**
* Set the field value
* @memberof order.OrderType
* @param {order.CustomerIdMethod} customerIdMethod 
*/
OrderType.prototype.setCustomerIdMethod = function(customerIdMethod) {
  this.customerIdMethod = customerIdMethod;
};

/**
* Get the field value
* @memberof order.OrderType
* @return {order.CustomerIdMethod} 
*/
OrderType.prototype.getCustomerIdMethod = function() {
  return this.customerIdMethod;
};

/**
* Set the field value
* If this order type is deleted
*
* @memberof order.OrderType
* @param {Boolean} isDeleted 
*/
OrderType.prototype.setIsDeleted = function(isDeleted) {
  this.isDeleted = isDeleted;
};

/**
* Get the field value
* If this order type is deleted
* @memberof order.OrderType
* @return {Boolean} 
*/
OrderType.prototype.getIsDeleted = function() {
  return this.isDeleted;
};

/**
* Set the field value
* Optional system order type that this order type is associated with.
*
* @memberof order.OrderType
* @param {String} systemOrderTypeId 
*/
OrderType.prototype.setSystemOrderTypeId = function(systemOrderTypeId) {
  this.systemOrderTypeId = systemOrderTypeId;
};

/**
* Get the field value
* Optional system order type that this order type is associated with.
* @memberof order.OrderType
* @return {String} 
*/
OrderType.prototype.getSystemOrderTypeId = function() {
  return this.systemOrderTypeId;
};

/**
* Set the field value
* The hours this order type is available (if they differ from normal merchant hours)
*
* @memberof order.OrderType
* @param {hours.HoursSet} hours 
*/
OrderType.prototype.setHours = function(hours) {
  this.hours = hours;
};

/**
* Get the field value
* The hours this order type is available (if they differ from normal merchant hours)
* @memberof order.OrderType
* @return {hours.HoursSet} 
*/
OrderType.prototype.getHours = function() {
  return this.hours;
};

/**
* Set the field value
* The categories of items that can be assigned to this order type
*
* @memberof order.OrderType
* @param {Array.<base.Reference>} categories An array of 
*/
OrderType.prototype.setCategories = function(categories) {
  this.categories = categories;
};

/**
* Get the field value
* The categories of items that can be assigned to this order type
* @memberof order.OrderType
* @return {Array.<base.Reference>} An array of 
*/
OrderType.prototype.getCategories = function() {
  return this.categories;
};

/**
* @memberof order.OrderType
* @private
*/
OrderType.prototype.getMetaInfo = function(fieldName) {
  var curclass = this._class_;
  do {
    var fieldMetaInfo = curclass._meta_.fields[fieldName];
    if(fieldMetaInfo) {
      return fieldMetaInfo;
    }
    curclass = curclass.superclass;
  } while(curclass);
  return null;
};

OrderType.prototype.toString = function() {
  return JSON.stringify(this);
};

OrderType._meta_ =  {fields:  {}};
OrderType._meta_.fields["id"] = {};
OrderType._meta_.fields["id"].type = String;
OrderType._meta_.fields["labelKey"] = {};
OrderType._meta_.fields["labelKey"].type = String;
OrderType._meta_.fields["label"] = {};
OrderType._meta_.fields["label"].type = String;
OrderType._meta_.fields["taxable"] = {};
OrderType._meta_.fields["taxable"].type = Boolean;
OrderType._meta_.fields["isDefault"] = {};
OrderType._meta_.fields["isDefault"].type = Boolean;
OrderType._meta_.fields["filterCategories"] = {};
OrderType._meta_.fields["filterCategories"].type = Boolean;
OrderType._meta_.fields["isHidden"] = {};
OrderType._meta_.fields["isHidden"].type = Boolean;
OrderType._meta_.fields["fee"] = {};
OrderType._meta_.fields["fee"].type = Number;
OrderType._meta_.fields["minOrderAmount"] = {};
OrderType._meta_.fields["minOrderAmount"].type = Number;
OrderType._meta_.fields["maxOrderAmount"] = {};
OrderType._meta_.fields["maxOrderAmount"].type = Number;
OrderType._meta_.fields["maxRadius"] = {};
OrderType._meta_.fields["maxRadius"].type = Number;
OrderType._meta_.fields["avgOrderTime"] = {};
OrderType._meta_.fields["avgOrderTime"].type = Number;
OrderType._meta_.fields["hoursAvailable"] = {};
OrderType._meta_.fields["hoursAvailable"].type = order_HoursAvailable;
OrderType._meta_.fields["customerIdMethod"] = {};
OrderType._meta_.fields["customerIdMethod"].type = order_CustomerIdMethod;
OrderType._meta_.fields["isDeleted"] = {};
OrderType._meta_.fields["isDeleted"].type = Boolean;
OrderType._meta_.fields["systemOrderTypeId"] = {};
OrderType._meta_.fields["systemOrderTypeId"].type = String;
OrderType._meta_.fields["hours"] = {};
OrderType._meta_.fields["hours"].type = hours_HoursSet;
OrderType._meta_.fields["categories"] = {};
OrderType._meta_.fields["categories"].type = Array;
OrderType._meta_.fields["categories"].elementType = base_Reference;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = OrderType;
}
