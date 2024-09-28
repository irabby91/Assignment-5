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
            const now = new Date();
            const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            const day =weekday[now.getDay()];
            const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            const monthName = month[now.getMonth()];
            const date = now.getDate();
            const year = now.getFullYear();
            const time = now.toLocaleTimeString();
            const div = document.createElement('div');
            div.classList.add('border-2', 'border-gray-300', 'rounded-lg', 'w-[100%]', 'h-[140px]', 'flex', 'flex-col', 'justify-center', 'items-center', 'max-sm:w-[80%]', 'mx-auto', 'p-4', 'shadow-md');
            div.innerHTML = `
            <h3 class="lexend-font text-[20px] font-bold text-[#111111] max-sm:text-[14px] ">${donateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
            <p class="lexend-font text-[16px] font-bold text-[#111111B3] max-sm:text-[12px]">Date: ${day} ${monthName} ${date} ${year} ${time} GMT +0600 (Bangladesh Standard Time)</p>
            `

            document.getElementById('history-container').appendChild(div);
            document.getElementById('display-card').classList.remove('hidden');
        }
        else {
            alert('Insufficient Balance')
        }
    }

    else {
        alert('Invalid Donation Amount');
    }
});