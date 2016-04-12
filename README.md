<a href="http://devpost.com/software/pulsepay"><img src="https://cloud.githubusercontent.com/assets/10437615/14449050/08da0692-003d-11e6-8660-6b3d451fadac.png" title="PulsePay" alt="PulsePay"></a>

# Pulse Pay

> PulsePay is a a project created at the Pennsylvania State University Hackathon that revolves around an authentication system that allows safe transactions for online purcahses and combines the authentication given by the nymi band in order to secure transactions that are powered by the Vantiv API. It uses the unique heartbeat of the user to as an alternative payment option.

> Pulse Pay was created in 24 hours.

>  Pulse Pay, secure transactions, easy payment.

[![INSERT YOUR GRAPHIC HERE](https://cloud.githubusercontent.com/assets/10437615/14449090/81d3ca7e-003d-11e6-977a-829727bc5fb6.PNG)]()

- Pulse Pay allows easy transactions to be made securely on the web
- Pulse Pay is easy, simple, and quick.

> Demonstration

- Users start by choosing an online site to purchase items from, add items to their shopping cart, and then head to the checkout page. 
- When users are finished and ready to checkout items, they can sign in with the Nymi Band by clicking on it below the sign in button and double tab to finish the transaction. QUICK AND EASY 

![Recordit GIF](https://cloud.githubusercontent.com/assets/10437615/14449199/903382a2-003e-11e6-9cea-7d745f1e32d9.gif)

---
## Vantage API Usage

```javascript
// Sample transaction with Vantage API
var vantivRequest = function(data, callback) {
  request.post({
    url: 'https://apis.cert.vantiv.com/payment/sp2/credit/v1/sale',
    json: data,
    headers: {
      'Authorization': 'VANTIV license="{license-id}"'
    }
  }, function(err, httpResponse, body) {
    if (!err) {
      callback(body);
      transactionMade = true;
      transactionData = body;
      transactionData.amount = amount;
      console.log("Transaction Made");
    } else {
      console.error("Error in retrieving information from Vantiv");
    }
  });
};
```
### Clone

- Clone this repo to your local machine using `https://github.com/kas/HackPSU`

### Awards
---
🔃🔃🔃 1st place Vantage API Challenge PSU Hackathon! 🔃🔃🔃
---

## Team

| <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> | <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> | <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> |
| :---: |:---:| :---:|
| [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com)    | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com)  |
| <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> | <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> | <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> |

- You can just grab their GitHub profile image URL
- You should probably resize their picture using `?s=200` at the end of the image URL.
