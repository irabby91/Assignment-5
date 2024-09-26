document.getElementById('donate-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const donateAmount = document.getElementById('donation-box').value;
    const donated = parseFloat(donateAmount);
    if (donated > 0) {
        const balance = document.getElementById('donated-amount').innerHTML;
        const prevBalance = parseFloat(balance);
        const NewBalance = prevBalance + donated;
        document.getElementById('donated-amount').innerText = NewBalance;
        const myBalance=document.getElementById('my-balance').innerHTML;
        const myBalanceNew= parseFloat(myBalance);
        const myBalanceAfter=myBalanceNew-donated;
        document.getElementById('my-balance').innerText=myBalanceAfter;

    }
});