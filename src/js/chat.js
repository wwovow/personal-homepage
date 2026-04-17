const keywordCounter = {
    contact: 0,  // 联系
    identity: 0  // 你是谁
};

function checkSpecialTrigger(message) {
    // 👉 统一转小写（防止大小写问题）
    const text = message.toLowerCase();

    // ===== 检测“联系” =====
    if (text.includes("联系") || text.includes("加你") || text.includes("怎么找你")) {
        keywordCounter.contact++;

        if (keywordCounter.contact >= 3) {
            return "？这么想加？就不告诉你~就不告诉你~~";
        }
    }

    // ===== 检测“你是谁” =====
    if (text.includes("你是谁")) {
        keywordCounter.identity++;

        if (keywordCounter.identity >= 2) {
            return "还问！那现在偶素古娜拉·昀咯！什么你不知道古娜拉，那'古娜拉黑暗之神'你肯定有印象吧~";
        }
    }

    return null; // 没触发
}



    function addMessageToChat(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
    }
;

const chatMessages = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// 数字分身的信息库
const botInfo = {
  name: '昀',
  identity: '是人类',
  doing: '学怎么vibe！',
  skills: '擅长提出各种建议（能不能实现是另一个问题），比较关心功能实现',
  interests: '看书、画画、听歌、学AI',
  trait: '非常跳脱ovo'
};

// 常见问题的回答
const responses = {
  你是谁: `我是 ${botInfo.name}，${botInfo.identity}～`,
  你叫什么: `你可以叫我 ${botInfo.name} ✨`,
  你现在做得怎么样了: `其实还可以啦！现在主要在${botInfo.doing}，在学做这个主页呢～`,
  你在做什么: `${botInfo.doing}`,
  联系: `你能到这儿来跟我对话，那你肯定知道我的联系方式呀ww`,
  你擅长什么: `我${botInfo.skills}`,
  你的兴趣: `我喜欢${botInfo.interests}`,
  你的特点: `${botInfo.trait}`,
  你好: `你好呀！很高兴认识你～😊`,
  hi: `hey~ 有什么想聊的吗？`,
  小惊喜: `你不觉得这个就是小surprise嘛！`,
  惊喜: `你不觉得这个就是小surprise嘛！`,
  默认: `嘘，其他的还不能say，以后再说吧~ww`
};

// 添加消息到聊天窗口
function addMessage(text, isUser) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);
  
  // 自动滚到最下面
  const chatWindow = document.querySelector('.chat-window');
  chatWindow.scrollTo({
  top: chatWindow.scrollHeight,
  behavior: 'smooth'
});
}

// 获取机器人的回复
function getBotReply(userMessage) {
  const lowerMessage = userMessage.toLowerCase().trim();
  
  // 精确匹配
  for (let key in responses) {
    if (lowerMessage.includes(key)) {
      return responses[key];
    }
  }
  
  // 如果没有匹配，返回默认回复
  return responses['默认'];
}

// 发送消息
function sendMessage() {
  const message = messageInput.value.trim();
  if (message === '') return;

  // 👉 先加用户消息
  addMessage(message, true);
  messageInput.value = '';

  // 👉 检测特殊触发
  const specialReply = checkSpecialTrigger(message);
  if (specialReply) {
    setTimeout(() => {
      addMessage(specialReply, false);
    }, 300);
    return;
  }

  // 👉 正常回复
  setTimeout(() => {
    const botReply = getBotReply(message);
    addMessage(botReply, false);
  }, 300);
}

// 绑定事件
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

const quickButtonsContainer = document.querySelector('.quick-buttons');

quickButtonsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.quick-btn');
    if (!btn) return;

    const question = btn.getAttribute('data-question');
    messageInput.value = question;
    sendMessage();

    // 👇 关键：先锁定当前高度
    const height = quickButtonsContainer.scrollHeight;
    quickButtonsContainer.style.height = height + 'px';

    // 强制浏览器应用这个高度（触发重排）
    quickButtonsContainer.offsetHeight;

    // 👇 再加动画类
    quickButtonsContainer.classList.add('hide');

    setTimeout(() => {
        quickButtonsContainer.style.display = 'none';
    }, 500);
});