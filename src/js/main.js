document.addEventListener('DOMContentLoaded', () => {
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');
    const btnPause = document.getElementById('btn-pause');
    const catPaw = document.getElementById('cat-paw');

    const leftPanel = document.getElementById('left-panel');
    const rightPanel = document.getElementById('right-panel');
    const inviteScreen = document.getElementById('invite-screen');
    const chatScreen = document.getElementById('chat-screen');

    // 翻牌
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });

    // 左箭头打开关于我
    btnLeft.addEventListener('click', () => {
        leftPanel.style.display = 'flex';
        rightPanel.classList.remove('show');
    });

    // 右箭头打开邀请界面
    btnRight.addEventListener('click', () => {
        rightPanel.classList.add('show');
        if (inviteScreen) inviteScreen.style.display = 'flex';
        if (chatScreen) chatScreen.style.display = 'none';
    });

    // 点击“要！” → 跳转到新聊天页面（新页面）
    document.getElementById('invite-yes').addEventListener('click', () => {
        window.location.href = "chat.html";   // 跳转到新页面 chat.html
    });

    // 点击“再等等w” → 关闭邀请界面
    document.getElementById('invite-no').addEventListener('click', () => {
        rightPanel.classList.remove('show');
    });

    // 暂停按钮
    btnPause.addEventListener('click', () => {
        createToast('别碰我 qvq');
    });

    // 点击猫爪拍飞左侧面板
    catPaw.addEventListener('click', () => {
        leftPanel.classList.add('paw-away');

        setTimeout(() => {
            leftPanel.style.display = 'none';
            leftPanel.classList.remove('paw-away');
        }, 900);
    });

    function createToast(text) {
        const toast = document.createElement('div');
        toast.className = 'bubble';
        toast.textContent = text;
        document.getElementById('toast-container').appendChild(toast);
        setTimeout(() => toast.remove(), 4200);
    }
});