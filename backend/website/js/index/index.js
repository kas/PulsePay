/* {
  "Transaction": {
    "TransactionAmount": "101.00",
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
}*/

$.ajax({
  type: "POST",
  url: url,
  data: data,
  success: success,
  dataType: dataType
});