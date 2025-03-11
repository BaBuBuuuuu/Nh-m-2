// scripts.js

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngừng gửi form để xử lý qua JavaScript
    
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    alert(`Cảm ơn bạn đã đánh giá! Điểm: ${rating} sao\nNhận xét: ${comment}`);
    
    // Reset form sau khi gửi
    document.querySelector('form').reset();
});
