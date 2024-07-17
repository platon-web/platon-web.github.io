window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    preloader.classList.add('hide');
    setTimeout(function() {
        preloader.style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 500); // Затримка відповідно до transition в CSS
});