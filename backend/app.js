/* Importations express, fs, body-parser, nodemailer, http */
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var http = require('http');
var querystring = require('querystring');
var app = express();
var request = require('request');
var path = require('path');

app.use(bodyParser.urlencoded({
  extended: true // for multi-objects request
}));



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});

var root = __dirname;

app.use("/website", express.static("website")); // If user goes to domain.com/website, we serve them the website folder

var transactionMade = false;
var transactionData = null;
var vantivRequest = function(data, callback) {
  request.post({
    url: 'https://apis.cert.vantiv.com/payment/sp2/credit/v1/sale',
    json: data,
    headers: {
      'Authorization': 'VANTIV license="05175a6e48184701b51e8fdc6b085ff4$$#$$srESu0UDFlTODjCjLD5Mg918U6SbWXNt$$#$$2017-03-08$$#$$cert_key$$#$$SHA512withRSA$$#$$RSA$$#$$1$$#$$8FA52E8A5BA768320C02FEF4265A67C590881A8508840C00BE129A36A5A9CC8FEB69331FD940F8C3AEE527FA966C844F8573CA11325C294ECC3BEAAD3FB3390E49953A29478F31619E92CC63F64E42852802C504B06F482806FC3D2497447B90E435F21B96C4BBA90948D521BC2B058E0EF14258AD2EB3FA5F7192C57AE56611CBB1C621E28062DADCC2D1EBD76C633D04EF6B866DF0B8AD411ED2DB1599529CD333AFB3EF24011773E891BA399319C95FE02ED235367F4178422D60E49BADCBF5DEB4D67BB0E1189C044F18A7E4E2783698E434E1AFB264686AC350338B4CC6E9C8521B314F2A8E863C6AAD5FAE4954808D3B5783A0A26295D23B3BECA3C13E"'
    }
  }, function(err, httpResponse, body) {
    if (!err) {
      callback(body);
      transactionMade = true;
      transactionData = body;
      console.log("Transaction Made");
    }
    else {
      console.error("Error in retrieving information from Vantiv");
    }
  });
};

app.post('/pay', function(req, res) {
  if (req.body !== null) {
    console.log(req.body);
    vantivRequest(req.body, function(resp) {
      res.send(resp);
    });
  }
  else {
    console.log("Request json object is empty.");
  }
});

app.get("/trans.html", function(req, res) {
  transactionMade = false;
  res.sendfile(path.resolve('trans.html'));
});

app.get('/transStatus', function(req, res) {
  //console.log("transStatus: " + transactionMade);
  if (transactionMade) {
    res.send({
      result: true,
      transData: transactionData
    });
  }
  else {
    res.send({
      result: false
    });
  }
});

var dat = {
  "Transaction": {
    "TransactionAmount": "10.00",
    "ReferenceNumber": "1",
    "PartialApprovedFlag": "false",
    "CustomerID": "345",
    "OrderSource": "ecommerce"
  },
  "Address": {
    "BillingName": "John & Mary Smith",
    "BillingCountry": "US",
    "BillingAddress1": "1 Main St.",
    "BillingCity": "Burlington",
    "BillingZipcode": "01803-3747",
    "BillingState": "MA"
  },
  "Reports": {
    "ReportGroup": "1243"
  },
  "Application": {
    "ApplicationID": "0314efb525d8f740f1a33bd71"
  },
  "Credentials": {
    "AcceptorID": "1147003"
  },
  "Card": {
    "CardNumber": "4457010000000009",
    "Type": "VI",
    "CVV": "222",
    "ExpirationMonth": "01",
    "ExpirationYear": "16"
  }
};

//after vanitiv api return
/*
return format:
{
  "litleOnlineResponse": {
    "@version": "10.2",
    "@response": "0",
    "@message": "Valid Format",
    "saleResponse": {
      "@id": "0314efb525d8f740f1a33bd71",
      "@reportGroup": "1243",
      "@customerId": "345",
      "orderId": "1",
      "response": "000",
      "responseTres": "2016-04-08T22:5 :06",
      "postDate": "2016-04-09",
      "message": "Approved",
      "authCode": "11111 ",
      "fraudResult": {
        "avsResult": "01",
        "cardValidationResult": "M"
      },
      "TransactionID": "82917738264905097"
    }
  },
  "RequestID": "088aeb36-3ebb-460d-91b1-a4cd4dd77343"
}
*/
// });

app.listen(process.env.PORT, function() {
  console.log('App listening at http://%s:%s', process.env.IP, process.env.PORT);
});