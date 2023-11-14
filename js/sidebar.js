// script.js

document.addEventListener('DOMContentLoaded', function() {
  // 获取所有页面中的 h1 和 h2 标题元素
  var headings = document.querySelectorAll('h1, h2');

  // 获取 sidebar 元素
  var sidebar = document.getElementById('sidebar');

  // 生成导航链接
  headings.forEach(function(heading) {
    var link = document.createElement('a');
    link.textContent = heading.textContent;
    link.href = '#' + heading.id;

    // 将链接添加到 sidebar 中
    sidebar.appendChild(link);

    // 为链接添加点击事件监听器，实现页内跳转
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // 使用 smooth 滚动效果
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
