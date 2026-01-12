// MathJax加载器 - 检测并处理CDN资源加载失败的情况
(function() {
  'use strict';

  // 检测MathJax是否成功加载
  function checkMathJaxLoad() {
    if (typeof MathJax !== 'undefined' && MathJax.startup) {
      console.log('MathJax loaded successfully from CDN');
      // 如果MathJax已定义，则不需要做任何事情
    } else {
      console.warn('MathJax failed to load from CDN. Consider hosting the library locally.');
      // 如果MathJax没有加载成功，可以显示提示信息
      setTimeout(function() {
        if (typeof MathJax === 'undefined') {
          console.warn('MathJax is still not loaded after timeout. Math formulas may not render properly.');
          // 提供一个简单的警告给用户
          const warningDiv = document.createElement('div');
          warningDiv.innerHTML = '<div style="position: fixed; top: 10px; right: 10px; background: #ffdddd; border: 1px solid #ff0000; padding: 10px; z-index: 10000;">' +
                                '<strong>注意:</strong> 数学公式渲染库加载失败，请检查网络连接或联系管理员。<br/>' +
                                'Mathematical formulas may not display correctly.</div>';
          document.body.appendChild(warningDiv);
        }
      }, 5000); // 5秒后检查是否加载
    }
  }

  // 在DOM加载完成后检查
  if (document.readyState !== 'loading') {
    checkMathJaxLoad();
  } else {
    document.addEventListener('DOMContentLoaded', checkMathJaxLoad);
  }
})();