/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/** Used to track the origin of a distributed call. */
/**
* @constructor
* @memberof apps
*/
var AppTracking = function() {
  this._class_ = AppTracking;
  this.applicationID = undefined;
  this.applicationVersion = undefined;
  this.sourceSDK = undefined;
  this.sourceSDKVersion = undefined;
};


/**
* Set the field value
* A string representing an application
*
* @memberof apps.AppTracking
* @param {String} applicationID 
*/
AppTracking.prototype.setApplicationID = function(applicationID) {
  this.applicationID = applicationID;
};

/**
* Get the field value
* A string representing an application
* @memberof apps.AppTracking
* @return {String} 
*/
AppTracking.prototype.getApplicationID = function() {
  return this.applicationID;
};

/**
* Set the field value
* A string representing a semanticversion.  See http://semver.org/
*
* @memberof apps.AppTracking
* @param {String} applicationVersion 
*/
AppTracking.prototype.setApplicationVersion = function(applicationVersion) {
  this.applicationVersion = applicationVersion;
};

/**
* Get the field value
* A string representing a semanticversion.  See http://semver.org/
* @memberof apps.AppTracking
* @return {String} 
*/
AppTracking.prototype.getApplicationVersion = function() {
  return this.applicationVersion;
};

/**
* Set the field value
* A string representing a SDK
*
* @memberof apps.AppTracking
* @param {String} sourceSDK 
*/
AppTracking.prototype.setSourceSDK = function(sourceSDK) {
  this.sourceSDK = sourceSDK;
};

/**
* Get the field value
* A string representing a SDK
* @memberof apps.AppTracking
* @return {String} 
*/
AppTracking.prototype.getSourceSDK = function() {
  return this.sourceSDK;
};

/**
* Set the field value
* A string representing a semanticversion.  See http://semver.org/
*
* @memberof apps.AppTracking
* @param {String} sourceSDKVersion 
*/
AppTracking.prototype.setSourceSDKVersion = function(sourceSDKVersion) {
  this.sourceSDKVersion = sourceSDKVersion;
};

/**
* Get the field value
* A string representing a semanticversion.  See http://semver.org/
* @memberof apps.AppTracking
* @return {String} 
*/
AppTracking.prototype.getSourceSDKVersion = function() {
  return this.sourceSDKVersion;
};

/**
* @memberof apps.AppTracking
* @private
*/
AppTracking.prototype.getMetaInfo = function(fieldName) {
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

AppTracking.prototype.toString = function() {
  return JSON.stringify(this);
};

AppTracking._meta_ =  {fields:  {}};
AppTracking._meta_.fields["applicationID"] = {};
AppTracking._meta_.fields["applicationID"].type = String;
AppTracking._meta_.fields["applicationVersion"] = {};
AppTracking._meta_.fields["applicationVersion"].type = String;
AppTracking._meta_.fields["sourceSDK"] = {};
AppTracking._meta_.fields["sourceSDK"].type = String;
AppTracking._meta_.fields["sourceSDKVersion"] = {};
AppTracking._meta_.fields["sourceSDKVersion"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = AppTracking;
}
