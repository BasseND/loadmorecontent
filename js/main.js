document.addEventListener('DOMContentLoaded', function () {
  // Variables
  var items = document.querySelectorAll('.need-help-thumbnail');
  var loadMoreBtn = document.querySelector('.load_more_btn');
  var spinner = document.createElement("div");

  // Hide all items except the first 3 items
  for (var i = items.length - 1; 3 <= i; i--) {
    items[i].classList = 'need-help-thumbnail hidden-item ';
  }

  // Loading all items
  loadItems();
  function loadItems() {
    loadMoreBtn.addEventListener('click', function (e) {
      e.preventDefault();
      buildSpinner();
      setTimeout(function () {
        removeSpinner();
        for (var i = 0; i < items.length; i++) {
          items[i].classList = 'need-help-thumbnail grow-anim';
        }
      }, 2000);
    })
  }
  // Build Spinner 
  function buildSpinner() {
    var loadMoreTitle = document.querySelector('.load-more-title');
    spinner.classList = 'spinner lds-css';
    spinner.innerHTML = '<div class="lds-spin" style="width:100%;height:100%"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>';
    loadMoreBtn.insertBefore(spinner, loadMoreTitle);
  }
  // Removing the spinner
  function removeSpinner() {
    spinner.remove();
  }
});

