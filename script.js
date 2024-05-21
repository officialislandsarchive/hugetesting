function searchItems() {
    var input, filter, ul, li, span, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("modalItems");
    li = ul.getElementsByClassName('modal-item');
    for (i = 0; i < li.length; i++) {
        span = li[i].getElementsByClassName("modal-item-name")[0];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

    // Show search results container if there are matching items
    var searchResultsContainer = document.querySelector('.search-results-container');
    var noResultsMessage = document.querySelector('.no-results-message');
    var resultsCount = ul.querySelectorAll('.modal-item[style*="display: none;"]').length;
    if (resultsCount < li.length) {
        searchResultsContainer.style.display = 'block';
        noResultsMessage.style.display = 'none';
    } else {
        searchResultsContainer.style.display = 'none';
        noResultsMessage.style.display = 'block';
    }
}
