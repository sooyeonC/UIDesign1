alert("hello, world!");

document.querySelectorAll('.item').forEach(function(item) {
	item.addEventListener('click', function() {
		this.classList.toggle('active');
	});
});