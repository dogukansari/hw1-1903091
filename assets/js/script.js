document.addEventListener('DOMContentLoaded', function() {
  const tableCells = document.querySelectorAll('table td');

  tableCells.forEach(cell => {
    cell.addEventListener('mouseover', function() {
      this.style.backgroundColor = 'lightblue';
      this.style.color = 'white';
    });

    cell.addEventListener('mouseout', function() {
      this.style.backgroundColor = '';
      this.style.color = '';
    });
  });
});

// Source: https://stackoverflow.com/questions/11975318/pure-javascript-table-column-hover-effect