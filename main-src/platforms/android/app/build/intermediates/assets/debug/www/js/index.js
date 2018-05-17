
function plusOK(){
    cordova.plugins.Wallet.plus([5,20],success , error);
}

function plusFAIL(){
    cordova.plugins.Wallet.plus([5,100],success , error);
}

function minusOK(){
    cordova.plugins.Wallet.minus([70,6],success , error);
}

function minusFAIL(){
    cordova.plugins.Wallet.minus([5,20],success , error);
}

function success(msg){
    console.log(msg);
    alert(msg);
}

function error(msg){

    console.log(msg);
    alert(msg);
    
}