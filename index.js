var encryptedText = [];
var convertedText = [];
var decryptedText = [];

function encryptText() {
    
    var encryptedText = [];
    var convertedText = [];

    var message = $("#enc-input").val();
    for(var i =0;i<message.length;i++) {
        convertedText.push(message[i].charCodeAt());        
    }
    for(var j=0;j<convertedText.length;j++) {
        encryptedText.push(convertedText[j]*convertedText.length);
    }
    
    $("#enc-result").val(encryptedText.toString());
}

function decryptText() {
    
    var decryptedText = [];
    var dconverted = [];
    
    var dmessage = $("#dec-input").val();
    var split = dmessage.split(",");

    for(var k = 0;k<split.length;k++) {
        dconverted.push((split[k]/split.length));
    }
    for(var l=0;l<dconverted.length;l++) {
        decryptedText.push(String.fromCharCode(dconverted[l]));
    }

    $("#dec-result").val(decryptedText.toString().replace(/,/g, ""));

}

function copyToClipboard(text) {
    var sampleTextarea = document.createElement("textarea");
    document.body.appendChild(sampleTextarea);
    sampleTextarea.value = text; //save main text in it
    sampleTextarea.select(); //select textarea contenrs
    document.execCommand("copy");
    document.body.removeChild(sampleTextarea);
}


$("#enc-button").click(function() {    
    encryptText();
});

$("#dec-button").click(function() {    
    decryptText();
});

$("#enc-copy").click(function() {
    var encResult = $("#enc-result").val();
    copyToClipboard(encResult);
});

$("#dec-copy").click(function() {
    var decResult = $("#dec-result").val();
    copyToClipboard(decResult);
});