// 主页导航平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // 只对页面内锚点链接使用平滑滚动，不影响正常页面跳转链接
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// 章节页面的知识点展开/折叠功能
document.addEventListener('DOMContentLoaded', function() {
    const topicTitles = document.querySelectorAll('.topic-title');
    
    // 默认隐藏所有内容
    const allTopicContents = document.querySelectorAll('.topic-content');
    allTopicContents.forEach(content => {
        content.classList.add('hidden');
    });
    
    topicTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.toggle-icon');
            
            if (content) {
                content.classList.toggle('hidden');
                if (icon) {
                    icon.classList.toggle('rotated');
                }
            }
        });
    });
    
    // 为第8-12章的新结构添加展开/折叠功能
    const knowledgeHeaders = document.querySelectorAll('.knowledge-header');
    
    knowledgeHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.fa-plus-circle');
            
            if (content) {
                content.classList.toggle('hidden');
                if (icon) {
                    icon.classList.toggle('rotated');
                }
            }
        });
    });
    
    // 如果在章节页面，初始化思维导图
    if (document.getElementById('mindmap-container')) {
        initializeMindMap();
    }
});

// 初始化思维导图（占位符函数）
function initializeMindMap() {
    console.log("初始化思维导图");
    // 这里将在后续添加具体实现
}

// 图表点击放大功能
function openModal(imageSrc, altText) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${imageSrc}" alt="${altText}">
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 关闭模态框
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = function() {
        document.body.removeChild(modal);
    };
    
    // 点击模态框外部关闭
    modal.onclick = function(event) {
        if (event.target === modal) {
            document.body.removeChild(modal);
        }
    };
}

// 添加模态框样式到页面
function addModalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            display: block;
            position: fixed;
            z-index: 1001;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
        }
        
        .modal-content {
            position: relative;
            background-color: transparent;
            margin: 5% auto;
            padding: 20px;
            width: 90%;
            max-width: 900px;
            text-align: center;
        }
        
        .modal-content img {
            max-width: 100%;
            max-height: 80vh;
            border-radius: 5px;
        }
        
        .close {
            color: white;
            position: absolute;
            top: -40px;
            right: 0;
            font-size: 35px;
            font-weight: bold;
            cursor: pointer;
        }
        
        .close:hover {
            color: #ccc;
        }
    `;
    
    document.head.appendChild(style);
}

// 页面加载时添加模态框样式
document.addEventListener('DOMContentLoaded', function() {
    addModalStyles();
});

// 练习题弹窗显示函数
function showExercise(exerciseId) {
    const exercise = document.getElementById(exerciseId);
    if (exercise) {
        exercise.style.display = 'block';
        // 防止页面滚动
        document.body.style.overflow = 'hidden';
    }
}

// 练习题弹窗关闭函数
function closeExercise(exerciseId) {
    const exercise = document.getElementById(exerciseId);
    if (exercise) {
        exercise.style.display = 'none';
        // 恢复页面滚动
        document.body.style.overflow = 'auto';
    }
}

// 点击弹窗外部区域关闭弹窗
window.onclick = function(event) {
    const exerciseModals = document.querySelectorAll('.exercise-modal');
    exerciseModals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            // 恢复页面滚动
            document.body.style.overflow = 'auto';
        }
    });
};

// 防止事件冒泡影响链接点击
document.addEventListener('DOMContentLoaded', function() {
    const chapterCards = document.querySelectorAll('.chapter-card');
    chapterCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 如果点击的是卡片本身而不是链接，则不做任何事情
            if (e.target.classList.contains('chapter-link')) {
                // 确保点击链接时不会被其他事件处理器阻止
                e.stopPropagation();
            }
        });
    });
});

// 练习题功能
function checkAnswers() {
    alert('正在检查答案...');
    // 显示所有答案
    document.querySelectorAll('.quiz-answer').forEach(answer => {
        answer.style.display = 'block';
    });
}

// 显示所有答案
function showAllAnswers() {
    document.querySelectorAll('.quiz-answer').forEach(answer => {
        answer.style.display = 'block';
    });
}

// 清空答案
function clearAnswers() {
    if(confirm('确定要清空所有答案吗？')) {
        document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
        document.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = false);
        document.querySelectorAll('textarea').forEach(textarea => textarea.value = '');
        document.querySelectorAll('.quiz-answer').forEach(answer => {
            answer.style.display = 'none';
        });
    }
}

// 为选项添加点击事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 页面加载时显示第40题和第41题的答案
    const specialQuestions = ['题1（第40题）', '题2（第41题）'];
    document.querySelectorAll('.quiz-item').forEach(item => {
        const questionText = item.querySelector('.quiz-question').textContent;
        if (specialQuestions.some(q => questionText.includes(q))) {
            const answer = item.querySelector('.quiz-answer');
            answer.style.display = 'block';
        }
    });
    // 为所有单选按钮添加事件监听器
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            const quizItem = this.closest('.quiz-item');
            const answer = quizItem.querySelector('.quiz-answer');
            answer.style.display = 'block';
        });
    });
    
    // 为所有复选框添加事件监听器
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const quizItem = this.closest('.quiz-item');
            const answer = quizItem.querySelector('.quiz-answer');
            answer.style.display = 'block';
        });
    });
    
    // 为文本域添加焦点离开事件
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('blur', function() {
            const quizItem = this.closest('.quiz-item');
            const answer = quizItem.querySelector('.quiz-answer');
            if (this.value.trim() !== '') {
                answer.style.display = 'block';
            }
        });
    });
});