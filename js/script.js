var links = document.querySelectorAll('.nav-link');
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    links.forEach(function(otherLink) {
      if (otherLink !== link) {
        otherLink.classList.remove('clicked');
      }
    });
    this.classList.toggle('clicked');
  });
});
