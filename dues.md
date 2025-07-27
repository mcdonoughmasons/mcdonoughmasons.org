---
layout: page
title: "Membership Dues"
permalink: /membership-dues/
---

<p>Dues must be paid in advance <strong>on or</strong> <strong>before April 30th</strong> of each year. You can use the convenient online payment method below and pay with your Paypal balance or Credit Card. </p>


<div id="smart-button-container">
<div style="text-align: center;">

<label for="amount">Enter your payment amount:</label>
<input id="amount" min="1" name="amount" step="0.01" type="number" value="1.00"/><br/><br/>
<div id="paypal-button-container"></div>
</div>
</div>
<script data-sdk-integration-source="button-factory" src="https://www.paypal.com/sdk/js?client-id=ARVh945RzoRfj3oYM1ss9ATWyYOur079YlU6msU3UoGIDNXSPA7EwjX0qQ2ceAnXTy5-6ObmZ_plfMpM&amp;enable-funding=venmo¤cy=USD"></script>
<script>
  function initPayPalButton() {
    paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'paypal',    
      },

      createOrder: function(data, actions) {
        // Retrieve amount from input field
        var amount = document.getElementById('amount').value;
        return actions.order.create({
          purchase_units: [{
            description: "Pay your annual dues to Fraternal Lodge No. 37",
            amount: {
              currency_code: "USD",
              value: amount // Use user-entered amount
            }
          }]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
          // Full available details
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
          // Show a success message within this page
          const element = document.getElementById('paypal-button-container');
          element.innerHTML = '';
          element.innerHTML = '<h3>Thank you for your payment!</h3>';
          // Or go to another URL:  actions.redirect('thank_you.html');
        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container');
  }
  initPayPalButton();
</script>