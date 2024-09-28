document.getElementById('donation-btn').addEventListener('click', function () {
    document.getElementById('donation-form-section').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
    this.style.backgroundColor = '#B4F461'
    document.getElementById('history-btn').style.backgroundColor = '#ffffff';    
});


document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('donation-form-section').classList.add('hidden');
    this.style.backgroundColor = '#B4F461'
    document.getElementById('donation-btn').style.backgroundColor = '#ffffff';
});