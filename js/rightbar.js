document.addEventListener('DOMContentLoaded', function() {
  var headings = document.querySelectorAll('h1');

  var rightbar = document.getElementById('rightbar');

  headings.forEach(function(heading) {
    var link = document.createElement('a');
    link.textContent = heading.textContent;
    link.href = '#' + heading.id;

    rightbar.appendChild(link);

    link.addEventListener('click', function(event) {
      event.preventDefault();

      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
});