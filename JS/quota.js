document.getElementById('quota-donate-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const donateAmount = getInputFieldValueById('quota-donation-input');
    if (donateAmount > 0) {
        const balance = getTextFieldValueById('quota-donated-amount');

        const NewBalance = balance + donateAmount;

        const myBalance = getTextFieldValueById('my-balance');
        const myBalanceAfter = myBalance - donateAmount;
        if (myBalanceAfter >= 0) {
            document.getElementById('quota-donated-amount').innerText = NewBalance;
            document.getElementById('my-balance').innerText = myBalanceAfter;

            // History

            const div = document.createElement('div');
            div.classList.add('border-2');
            div.classList.add('rounded-[16px]');
            div.classList.add('w-[1140px]');
            div.classList.add('h-[140px]');
            div.classList.add('flex');
            div.classList.add('flex-col');
            div.classList.add('justify-center');
            div.classList.add('items-center');
            div.innerHTML = `
            <h3 class="lexend-font text-[20px] font-bold text-[#111111] ">${donateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
            `

            document.getElementById('history-container').appendChild(div);
        }
        else {
            alert('Insufficient Balance')
        }
    }

    else {
        alert('Invalid Donation Amount');
    }
});