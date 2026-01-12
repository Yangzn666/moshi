// MathJax配置文件
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  }
};

// 如果MathJax加载失败，提供一个错误处理
document.addEventListener('DOMContentLoaded', function() {
  if (typeof MathJax !== 'undefined') {
    console.log('MathJax loaded successfully');
  } else {
    console.warn('MathJax failed to load, using fallback');
  }
});