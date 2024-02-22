document.addEventListener('DOMContentLoaded', function() {
    var searchField = document.querySelector('.icon');
    var searchImg = document.getElementById('search-icon');

    searchField.addEventListener('click', function(event) {
        if (!searchField.classList.contains('expanded')) {
            searchField.innerHTML = '<input type="text" placeholder="Пошук..." id="search-input">';
            var searchInput = document.getElementById('search-input');
            searchInput.focus();
            searchInput.addEventListener('blur', function() {
                searchField.innerHTML = '<div id="search-icon"><img src="images/search_icon.png" alt="пошук"></div>';
            });
            searchInput.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        } else {
            searchField.innerHTML = '<div id="search-icon"><img src="images/search_icon.png" alt="пошук"></div>';
        }
        
        searchField.classList.toggle('expanded');
        event.stopPropagation(); 
    });

    document.onclick = function() {
        if (searchField.classList.contains('expanded')) {
            searchField.classList.remove('expanded');
            searchField.innerHTML = '<div id="search-icon"><img src="images/search_icon.png" alt="пошук"></div>';
        }
    };
});