# Pulse Pay

<a href="http://devpost.com/software/pulsepay"><img src="https://cloud.githubusercontent.com/assets/10437615/14449050/08da0692-003d-11e6-8660-6b3d451fadac.png" title="PulsePay" alt="PulsePay"></a>

> PulsePay is a project created at the Pennsylvania State University Hackathon that revolves around an authentication system that allows safe transactions for online purcahses and combines the authentication given by the nymi band in order to secure transactions that are powered by the Vantiv API. It uses the unique heartbeat of the user to as an alternative payment option.

> Pulse Pay was created in 24 hours.

> Pulse Pay, secure transactions, easy payment.

[![Nymi Sign In Image](https://cloud.githubusercontent.com/assets/10437615/14449090/81d3ca7e-003d-11e6-977a-829727bc5fb6.PNG)]()

- Pulse Pay allows easy transactions to be made securely on the web
- Pulse Pay is easy, simple, and quick.

> Demonstration

- Users start by choosing an online site to purchase items from, add items to their shopping cart, and then head to the checkout page. 
- When users are finished and ready to checkout items, they can sign in with the Nymi Band by clicking on it below the sign in button and double tab to finish the transaction. QUICK AND EASY 

<a href="https://preview.c9users.io/yehyaawad/hackpsu2016/HackPSU/backend/website/index.html" target="_blank"><img src="https://cloud.githubusercontent.com/assets/10437615/14449199/903382a2-003e-11e6-9cea-7d745f1e32d9.gif">

---
## Vantiv API Usage

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

- Clone this repo to your local machine using `$ git clone https://github.com/kas/HackPSU`

### Awards
---
<img src="http://i764.photobucket.com/albums/xx284/Futarest/owner_icongif.png" border="0"><img src="http://i764.photobucket.com/albums/xx284/Futarest/owner_icongif.png" border="0"><img src="http://i764.photobucket.com/albums/xx284/Futarest/owner_icongif.png" border="0"> 1st place HackPSU: Best use of Vantiv API <img src="http://i764.photobucket.com/albums/xx284/Futarest/owner_icongif.png" border="0"><img src="http://i764.photobucket.com/albums/xx284/Futarest/owner_icongif.png" border="0"><img src="http://i764.photobucket.com/albums/xx284/Futarest/owner_icongif.png" border="0">
---

## Team

| <a href="http://hozaifaabdalla.com" target="_blank">**Hozaifa Abdalla**</a> | <a href="http://kensch.com" target="_blank">**Kenneth Schnall**</a> | <a href="http://www.yehyaawad.com" target="_blank">**Yehya Awad**</a> |
| :---: |:---:| :---:|
| <a href="http://hozaifaabdalla.com" target="_blank"><img src="https://cloud.githubusercontent.com/assets/10437615/14451031/7b62c078-0051-11e6-8f79-1cae306401b7.gif" width="200"></a>    | <a href="http://kensch.com" target="_blank"><img src="https://quarantinestudies.files.wordpress.com/2014/02/facebook-profile-picture-unknown-facts-about-facebook.jpg" width="200"></a> | <a href="http://yehyaawad.com" target="_blank"><img src="http://www.yehyaawad.com/img/headshot-y2.jpg" width="200"></a>  |
| <a href="http://github.com/abdallahozaifa" target="_blank">`github.com/abdallahozaifa`</a> | <a href="http://github.com/kas" target="_blank">`github.com/kas`</a> | <a href="http://github.com/awadyehya" target="_blank">`github.com/awadyehya`</a> |

| <a href="Hansel's website" target="_blank">**Hansel Lobo**</a> | <a href="Alan's website" target="_blank">**Xiaoyu Zhou**</a> | 
| :---: |:---:|
| <a href="Hansel's website" target="_blank"><img src="https://scontent.xx.fbcdn.net/v/t1.0-9/12936656_1222540204424499_4999199656490007862_n.jpg?oh=734d4f20987a7b0e44be7640abfd2cd8&amp;oe=57854664" width="200"></a> | <a href="Allen's website" target="_blank"><img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/12990852_10206445712801710_4553203964392502793_n.jpg?oh=bc3e359fe41ca0f50662a940fe887f92&oe=577A3EC2" width="200"></a> | 
| <a href="http://github.com/hansel202" target="_blank">`github.com/hansel202`</a> | <a href="http://www.allenzdev.com" target="_blank">`Allen's Dev`</a> | 
