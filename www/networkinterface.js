var networkinterface = function() {
};

networkinterface.getIPAddress = function( success, fail ) {
    cordova.exec( success, fail, "networkinterface", "getIPAddress", [] );
};
networkinterface.getNetmaskNow = function( success, fail ) {
    cordova.exec( success, fail, "networkinterface", "getNetmaskNow", [] );
};

module.exports = networkinterface;
