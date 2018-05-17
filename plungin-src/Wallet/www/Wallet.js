var exec = require('cordova/exec');

// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'Wallet', 'coolMethod', [arg0]);
// };


var walletFunc = function(){};  

walletFunc.prototype.plus = function(arg0, success, error) {
    exec(success, error, "Wallet", "Plus", arg0);
};

walletFunc.prototype.minus = function(arg0, success, error) {
    exec(success, error, "Wallet", "Minus", arg0);
};

var WALLETFUNC = new walletFunc();
module.exports = WALLETFUNC; 