function searchItems() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const items = document.querySelectorAll('#3d-list li');

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}
