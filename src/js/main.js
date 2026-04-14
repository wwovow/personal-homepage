document.addEventListener('DOMContentLoaded', () => {
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');
    const btnPause = document.getElementById('btn-pause');

    const leftPanel = document.getElementById('left-panel');
    const rightPanel = document.getElementById('right-panel');
    const toastContainer = document.getElementById('toast-container');

    // 左侧关于我
    btnLeft.addEventListener('click', () => {
        leftPanel.classList.add('show');
        rightPanel.classList.remove('show');
    });

    // 右侧聊天邀请
    btnRight.addEventListener('click', () => {
        rightPanel.classList.add('show');
        leftPanel.classList.remove('show');
    });

    // 返回按钮
    document.getElementById('return-left').addEventListener('click', () => {
        leftPanel.classList.remove('show');
    });

    document.getElementById('return-right').addEventListener('click', () => {
        rightPanel.classList.remove('show');
    });

    // 暂停按钮 - 飘字
    btnPause.addEventListener('click', () => {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = '别碰我 qvq';
        toastContainer.appendChild(toast);

        // 3.5秒后自动移除
        setTimeout(() => {
            toast.remove();
        }, 4000);
    });
});