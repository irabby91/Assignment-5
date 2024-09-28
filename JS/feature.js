document.getElementById('Donation-btn').addEventListener('click', function(){
    document.getElementById('donation-form-section').classList.remove('hidden');
    // document.getElementById('cash-out-form').classList.add('hidden');
    this.style.backgroundColor= '#B4F461'
    document.getElementById('history-btn').style.backgroundColor = '#ffffff';

    const currentTime=new Date();
    const formatTime= currentTime.toLocaleTimeString();
    console.log(formatTime);
    
});


document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donation-form-section').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');
    this.style.backgroundColor= '#B4F461'
    document.getElementById('Donation-btn').style.backgroundColor = '#ffffff';
});