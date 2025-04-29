// Fungsi untuk toggle konten
document.getElementById('internalBtn').addEventListener('click', function() {
    const content = document.getElementById('internalContent');
    content.classList.toggle('hidden');
    
    if (content.classList.contains('hidden')) {
        this.textContent = 'Tampilkan Paragraf';
    } else {
        this.textContent = 'Sembunyikan Paragraf';
    }
});

// Fungsi untuk mengubah warna background
const bgColors = ['#f9f9f9', '#e3f2fd', '#fff8e1', '#f1f8e9'];
let currentBgIndex = 0;

document.getElementById('bgChanger').addEventListener('click', function() {
    currentBgIndex = (currentBgIndex + 1) % bgColors.length;
    document.body.style.backgroundColor = bgColors[currentBgIndex];
});

// Fungsi untuk menampilkan waktu
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('currentTime').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime(); // Panggil sekali saat pertama kali load

// Fungsi untuk color boxes (CSS eksternal)
document.querySelectorAll('.color-box').forEach(box => {
    box.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        alert(`Anda memilih warna ${color}!`);
    });
});