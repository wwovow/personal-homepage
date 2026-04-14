document.addEventListener('DOMContentLoaded', () => {
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');
    const btnPause = document.getElementById('btn-pause');

    const leftPanel = document.getElementById('left-panel');
    const rightPanel = document.getElementById('right-panel');
    const eraser = document.getElementById('eraser');
    const toastContainer = document.getElementById('toast-container');

    let isDragging = false;
    let currentEraser = null;

    // 打开左侧面板
    btnLeft.addEventListener('click', () => {
        leftPanel.classList.add('show');
        leftPanel.classList.remove('erasing');
        rightPanel.classList.remove('show');
    });

    // 暂停飘字（保持原来功能）
    btnPause.addEventListener('click', () => {
        createToast('别碰我 qvq');
    });

    // 黑板擦拖拽功能
    eraser.addEventListener('mousedown', (e) => {
        isDragging = true;
        currentEraser = eraser;
        leftPanel.classList.add('erasing');
        
        // 创建跟随鼠标的临时板擦（视觉效果）
        const ghost = document.createElement('div');
        ghost.style.position = 'fixed';
        ghost.style.fontSize = '48px';
        ghost.style.pointerEvents = 'none';
        ghost.style.zIndex = '999';
        ghost.textContent = '🧼';
        document.body.appendChild(ghost);

        const moveHandler = (moveEvent) => {
            ghost.style.left = moveEvent.clientX - 25 + 'px';
            ghost.style.top = moveEvent.clientY - 25 + 'px';
        };

        document.addEventListener('mousemove', moveHandler);

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', moveHandler);
            ghost.remove();
            
            isDragging = false;
            
            // 板擦飞回原位
            setTimeout(() => {
                leftPanel.classList.remove('erasing');
                
                // 随机吐槽
                if (Math.random() > 0.5) {
                    createToast('不要乱扔啊我不是垃圾！', true);
                }
            }, 800);
        }, { once: true });
    });

    // 创建飘字函数
    function createToast(text, isEraser = false) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        if (isEraser) toast.style.background = 'rgba(240, 230, 255, 0.95)';
        toast.textContent = text;
        toastContainer.appendChild(toast);

        setTimeout(() => toast.remove(), 4500);
    }
});