/* Function used for the payment processing */
var pay = {};

/* Data that is sent over to the server */
pay.data = function(amount) {
  return {
    "Transaction": {
      "TransactionAmount": amount,
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
};

pay.error = function(err) {
  if(err) console.log("Error in sending information!");
  // do whatever you want on the page if the transaction fails
};

pay.send = function(price,callback) {

  /* Converts input to string if not string */
  if (typeof price !== 'string') {
    price = price.toString();
  }

  /* Checks to see if it has the decimal and formats it correctly */
  if (price.indexOf(".") === -1) {
    price = price + ".00";
  }

  var info = pay.data(price);
  console.log(info);
  $.ajax({
    url: "/pay",
    type: "POST",
    data: info,
    dataType: "json",
    
    /*Success function that executes after the information is retrieved */
    success: function(data) {
      console.log("Information was sent successfully!");
      console.log(data);
      callback();
    },
    error: pay.error
  });
};

/* Executes when you get back all the report information  */

var callback = function(report){
  // do whatever with the report
};

//pay.send(amount, callback);