function splitBill() {
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    const numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);
  
    if (isNaN(totalAmount) || isNaN(numberOfPeople)) {
      alert('Please enter valid numbers');
      return;
    }
  
    fetch('/split-bill', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ totalAmount, numberOfPeople })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerText = `Each person should pay: $${data.perPersonAmount}`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  