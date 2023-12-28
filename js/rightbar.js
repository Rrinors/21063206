document.addEventListener('DOMContentLoaded', function() {
    var headings = document.querySelectorAll('pos');
  
    var rightbar = document.getElementById('rightbar');
  
    headings.forEach(function(heading) {
      var link = document.createElement('a');
      link.textContent = heading.id;
      link.href = '#' + heading.id;
  
      // 将链接添加到 sidebar 中
      rightbar.appendChild(link);
  
      // 为链接添加点击事件监听器，实现页内跳转
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        // 使用 smooth 滚动效果
        document.querySelector(link.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  });