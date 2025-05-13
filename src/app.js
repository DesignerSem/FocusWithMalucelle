// 常量定义
const FOCUS_TIME_DEFAULT = 30; // 默认专注时间（分钟）
const UNFOCUSED_MESSAGE_INTERVAL = 10000; // 未专注状态下消息发送间隔（毫秒）
const BUBBLE_DURATION = 5000; // 气泡显示时间（毫秒）

// 场景配置
const SCENES = {
    SNOW: {
        video: {
            unfocused: './assets/videos/snow_unfocused.mp4',
            focusing: './assets/videos/snow_focusing.mp4',
            completed: './assets/videos/snow_completed.mp4'
        },
        audio: {
            unfocused: './assets/audios/snow_unfocused.mp3',
            focusing: './assets/audios/snow_focusing.mp3',
            completed: './assets/audios/snow_completed.mp3'
        },
        static: {
            unfocused: './assets/images/snow_static_unfocused.jpg',
            focusing: './assets/images/snow_static_focusing.jpg',
            completed: './assets/images/snow_static_completed.jpg'
        }
    },
    RAIN: {
        video: {
            unfocused: './assets/videos/rain_unfocused.mp4',
            focusing: './assets/videos/rain_focusing.mp4',
            completed: './assets/videos/rain_completed.mp4'
        },
        audio: {
            unfocused: './assets/audios/rain_unfocused.mp3',
            focusing: './assets/audios/rain_focusing.mp3',
            completed: './assets/audios/rain_completed.mp3'
        },
        static: {
            unfocused: './assets/images/rain_static_unfocused.jpg',
            focusing: './assets/images/rain_static_focusing.jpg',
            completed: './assets/images/rain_static_completed.jpg'
        }
    },
    SEASIDE: {
        video: {
            unfocused: './assets/videos/seaside_unfocused.mp4',
            focusing: './assets/videos/seaside_focusing.mp4',
            completed: './assets/videos/seaside_completed.mp4'
        },
        audio: {
            unfocused: './assets/audios/seaside_unfocused.mp3',
            focusing: './assets/audios/seaside_focusing.mp3',
            completed: './assets/audios/seaside_completed.mp3'
        },
        static: {
            unfocused: './assets/images/seaside_static_unfocused.jpg',
            focusing: './assets/images/seaside_static_focusing.jpg',
            completed: './assets/images/seaside_static_completed.jpg'
        }
    }
};

// 预设的聊天消息
const MESSAGES = {
    unfocused: [
        "今天的魔法学习进度如何啊？需要我的帮助吗？╰(*°▽°*)╯",
        "你知道吗？龙的鳞片在雨天会更加坚硬呢！这是魔法学院的秘密知识～",
        "魔法书第三页的咒语我还是念不顺... (*´Д｀)=з",
        "啊！安布罗希亚又开花了！这是个好兆头！Σ(っ °Д °;)っ",
        "据说专注的力量可以增强魔法效果哦！让我们一起试试吧～",
        "我的魔法笔记最近丢了一页...你有看到吗？(・_・;)",
        "时间魔法是最难掌握的，但也是最实用的！(*╯°□°)╯",
        "这个季节的魔法能量特别充沛呢！感觉到了吗？(๑•̀ㅂ•́)✧",
        "我最近在研究一种新的专注魔法，听说效果很好呢～",
        "魔法师的思考力是最强大的武器！让我们一起锻炼吧！ヾ(≧▽≦*)o"
    ],
    sceneChange: [
        "天气变化了！这一定是某位大魔法师的杰作～Σ(°△°|||)︴",
        "看！天气变了！我的魔杖感应到了不同的魔法元素！",
        "哦！感觉到了吗？天气的变化会影响魔法的强度哦！",
        "天气魔法成功了！我的老师会为我骄傲的！(*^▽^*)",
        "这种天气下，魔法书上的文字会发光呢！试试看吧～",
        "气候魔法是我的专长之一！你喜欢这个变化吗？(•‾̑⌣‾̑•)",
        "环境的改变会让我们的魔法学习效率提升呢！感谢天气女神！"
    ],
    focusStart: [
        "专注魔法，启动！我们一起加油吧！(ง •̀_•́)ง",
        "魔法修炼开始！这段时间我会陪着你的！",
        "专注时间到！别担心，我会守护你的学习空间～",
        "魔法结界已展开！接下来就是属于我们的专注时光了！",
        "时间咒语已启动！让我们一起战胜懒惰魔王吧！",
        "专注之盾已经张开！外界的干扰将无法打扰到我们！",
        "集中精神，魔法的力量将会倍增！我们开始吧！",
        "安静下来，感受魔法的能量在周围流动...专注吧！",
        "我已准备好我的魔法笔记，让我们一起精进吧！(๑•̀ㅂ•́)و✧",
        "专注时刻已到！记得，持之以恒是最强大的魔法！"
    ],
    focusEnd: [
        "太棒了！你完成了这次的专注修炼！(≧▽≦)",
        "魔法能量满满！你的专注力真是令人钦佩！",
        "任务完成！休息一下吧，你的魔法等级肯定提升了！",
        "哇！你做到了！这种专注力连高阶魔法师都会羡慕的！",
        "专注结束啦！你表现得像个真正的魔法师！(*^▽^*)",
        "时间到！你的专注力真是让我惊叹不已！",
        "完美！这次的修炼一定让你的魔法更强大了！",
        "恭喜完成！你的坚持是成为伟大魔法师的关键！",
        "专注完成！我能感受到你的魔法能量在增强！✧*｡٩(ˊᗜˋ*)و✧*｡",
        "时间到！看看我们一起完成了多么了不起的事情！"
    ]
};

// 应用状态
const appState = {
    currentScene: 'SNOW',
    status: 'unfocused', // unfocused, focusing, completed
    focusTime: FOCUS_TIME_DEFAULT,
    timer: null,
    timeRemaining: 0,
    volume: 50,
    motionEnabled: true,
    messageInterval: null,
    apiRequestInProgress: false
};

// DOM 元素
const elements = {
    video: document.getElementById('scene-video'),
    audio: document.getElementById('scene-audio'),
    startButton: document.getElementById('start-button'),
    timerDisplay: document.getElementById('timer-display'),
    timerSlider: document.getElementById('timer-slider'),
    cancelButton: document.getElementById('cancel-button'),
    sceneButton: document.getElementById('scene-button'),
    settingButton: document.getElementById('setting-button'),
    chatInput: document.getElementById('chat-input'),
    sendButton: document.getElementById('send-button'),
    chatBubblesContainer: document.getElementById('chat-bubbles-container'),
    sceneModal: document.getElementById('scene-modal'),
    settingsModal: document.getElementById('settings-modal'),
    sceneCloseButton: document.getElementById('scene-close-button'),
    settingsCloseButton: document.getElementById('settings-close-button'),
    volumeSlider: document.getElementById('volume-slider'),
    motionToggle: document.getElementById('motion-toggle'),
    sceneOptions: document.querySelectorAll('.scene-option')
};

// 初始化应用
function initApp() {
    // 设置默认场景
    updateScene(appState.currentScene);
    // 更新计时器显示
    updateTimerDisplay();
    // 设置事件监听器
    setupEventListeners();
    // 启动自动消息发送
    startAutoMessages();
}

// 设置事件监听器
function setupEventListeners() {
    // 开始按钮
    elements.startButton.addEventListener('click', toggleFocus);
    
    // 时间滑块
    elements.timerSlider.addEventListener('input', function() {
        appState.focusTime = parseInt(this.value);
        updateTimerDisplay();
    });
    
    // 取消按钮
    elements.cancelButton.addEventListener('click', cancelFocus);
    
    // 场景按钮
    elements.sceneButton.addEventListener('click', function() {
        showModal(elements.sceneModal);
    });
    
    // 设置按钮
    elements.settingButton.addEventListener('click', function() {
        showModal(elements.settingsModal);
    });
    
    // 场景选择
    elements.sceneOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedScene = this.getAttribute('data-scene');
            // 移除当前选中状态
            elements.sceneOptions.forEach(opt => opt.classList.remove('active'));
            // 添加新选中状态
            this.classList.add('active');
            
            // 如果场景确实改变了，才发送场景变化消息
            if (selectedScene !== appState.currentScene) {
                appState.currentScene = selectedScene;
                updateScene(selectedScene);
                
                // 只有在未专注状态才发送场景变化消息
                if (appState.status === 'unfocused') {
                    sendSceneChangeMessage();
                }
            }
        });
    });
    
    // 关闭场景模态框
    elements.sceneCloseButton.addEventListener('click', function() {
        hideModal(elements.sceneModal);
    });
    
    // 关闭设置模态框
    elements.settingsCloseButton.addEventListener('click', function() {
        hideModal(elements.settingsModal);
    });
    
    // 音量滑块
    elements.volumeSlider.addEventListener('input', function() {
        appState.volume = parseInt(this.value);
        updateVolume();
    });
    
    // 动效切换
    elements.motionToggle.addEventListener('change', function() {
        appState.motionEnabled = this.checked;
        // 切换动效时更新场景
        updateScene(appState.currentScene);
    });
    
    // 发送消息按钮
    elements.sendButton.addEventListener('click', sendUserMessage);
    
    // 输入框回车发送
    elements.chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
}

// 更新场景
function updateScene(sceneName) {
    const scene = SCENES[sceneName];
    const status = appState.status;
    
    // 添加淡出动画到当前视频
    elements.video.classList.add('video-fade-out');
    
    // 等待旧视频淡出后再加载新视频
    setTimeout(() => {
        if (appState.motionEnabled) {
            // 显示视频
            elements.video.style.backgroundImage = '';
            // 更新视频源
            elements.video.src = scene.video[status];
            elements.video.load();
            
            // 移除淡出类并添加淡入类
            elements.video.classList.remove('video-fade-out');
            elements.video.classList.add('video-fade-in');
            
            // 播放新视频
            elements.video.play().catch(error => console.error('视频播放失败:', error));
            
            // 视频加载完成后移除淡入类
            elements.video.oncanplay = () => {
                setTimeout(() => {
                    elements.video.classList.remove('video-fade-in');
                }, 800); // 与CSS动画时长匹配
            };
        } else {
            // 显示静态图片
            elements.video.src = '';
            elements.video.style.backgroundImage = `url('${scene.static[status]}')`;
            elements.video.style.backgroundSize = 'cover';
            elements.video.style.backgroundPosition = 'center';

            // 移除淡出类并添加淡入类
            elements.video.classList.remove('video-fade-out');
            elements.video.classList.add('video-fade-in');
            
            // 图片加载完成后移除淡入类
            setTimeout(() => {
                elements.video.classList.remove('video-fade-in');
            }, 800); // 与CSS动画时长匹配
        }
        
        // 更新音频源
        elements.audio.src = scene.audio[status];
        elements.audio.load();
        elements.audio.volume = appState.volume / 100;
        elements.audio.play().catch(error => console.error('音频播放失败:', error));
    }, 600); // 与CSS淡出动画时长匹配
    
    // 标记当前选中的场景
    elements.sceneOptions.forEach(option => {
        if (option.getAttribute('data-scene') === sceneName) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// 更新音量
function updateVolume() {
    elements.audio.volume = appState.volume / 100;
}

// 更新计时器显示
function updateTimerDisplay() {
    if (appState.status === 'focusing') {
        const minutes = Math.floor(appState.timeRemaining / 60);
        const seconds = appState.timeRemaining % 60;
        elements.startButton.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        elements.timerDisplay.textContent = `${appState.focusTime}min`;
    }
}

// 切换专注状态
function toggleFocus() {
    if (appState.status === 'unfocused') {
        startFocus();
    } else {
        // 专注中状态下点击按钮不做任何操作
    }
}

// 开始专注
function startFocus() {
    // 更新状态
    appState.status = 'focusing';
    appState.timeRemaining = appState.focusTime * 60;
    
    // 更新UI
    elements.startButton.classList.add('focus-mode');
    elements.timerSlider.classList.add('hidden');
    elements.timerDisplay.classList.add('hidden');
    elements.cancelButton.classList.remove('hidden');
    
    // 更新场景
    updateScene(appState.currentScene);
    
    // 发送专注开始消息
    sendFocusStartMessage();
    
    // 停止自动消息
    stopAutoMessages();
    
    // 启动计时器
    appState.timer = setInterval(function() {
        appState.timeRemaining--;
        updateTimerDisplay();
        
        if (appState.timeRemaining <= 0) {
            completeFocus();
        }
    }, 1000);
}

// 取消专注
function cancelFocus() {
    clearInterval(appState.timer);
    
    // 恢复状态
    appState.status = 'unfocused';
    
    // 恢复UI
    elements.startButton.classList.remove('focus-mode');
    elements.startButton.textContent = 'START';
    elements.timerSlider.classList.remove('hidden');
    elements.timerDisplay.classList.remove('hidden');
    elements.cancelButton.classList.add('hidden');
    
    // 更新场景
    updateScene(appState.currentScene);
    
    // 重启自动消息
    startAutoMessages();
}

// 完成专注
function completeFocus() {
    clearInterval(appState.timer);
    
    // 更新状态
    appState.status = 'completed';
    
    // 更新场景
    updateScene(appState.currentScene);
    
    // 发送专注完成消息
    sendFocusEndMessage();
    
    // 延迟恢复到未专注状态
    setTimeout(function() {
        // 恢复状态
        appState.status = 'unfocused';
        
        // 恢复UI
        elements.startButton.classList.remove('focus-mode');
        elements.startButton.textContent = 'START';
        elements.timerSlider.classList.remove('hidden');
        elements.timerDisplay.classList.remove('hidden');
        elements.cancelButton.classList.add('hidden');
        
        // 更新场景
        updateScene(appState.currentScene);
        
        // 重启自动消息
        startAutoMessages();
    }, 3000);
}

// 开始自动消息发送
function startAutoMessages() {
    if (appState.messageInterval) {
        clearInterval(appState.messageInterval);
    }
    
    appState.messageInterval = setInterval(function() {
        if (appState.status === 'unfocused' && document.querySelectorAll('.chat-bubble').length === 0) {
            sendUnfocusedMessage();
        }
    }, UNFOCUSED_MESSAGE_INTERVAL);
}

// 停止自动消息发送
function stopAutoMessages() {
    if (appState.messageInterval) {
        clearInterval(appState.messageInterval);
        appState.messageInterval = null;
    }
}

// 发送未专注状态消息
function sendUnfocusedMessage() {
    const messages = MESSAGES.unfocused;
    const randomIndex = Math.floor(Math.random() * messages.length);
    createChatBubble(messages[randomIndex]);
}

// 发送场景变化消息
function sendSceneChangeMessage() {
    const messages = MESSAGES.sceneChange;
    const randomIndex = Math.floor(Math.random() * messages.length);
    createChatBubble(messages[randomIndex]);
}

// 发送专注开始消息
function sendFocusStartMessage() {
    const messages = MESSAGES.focusStart;
    const randomIndex = Math.floor(Math.random() * messages.length);
    createChatBubble(messages[randomIndex]);
}

// 发送专注结束消息
function sendFocusEndMessage() {
    const messages = MESSAGES.focusEnd;
    const randomIndex = Math.floor(Math.random() * messages.length);
    createChatBubble(messages[randomIndex]);
}

// 创建聊天气泡
function createChatBubble(message) {
    // 清空现有气泡
    elements.chatBubblesContainer.innerHTML = '';

    // 统一过滤所有不可见字符和字面量\n（包括换行、回车、制表符、全角空格、零宽空格等）
    const cleanMessage = message
        .replace(/\\n/g, ' ') // 先去除字面量\n
        .replace(/[\n\r\t\u3000\u200B]+/g, ' ') // 再去除真实不可见字符
        .replace(/ +/g, ' ') // 合并多余空格
        .trim();

    // 创建新气泡
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble typewriter';

    // 随机位置
    const top = Math.floor(Math.random() * 5) + 70;
    const left = Math.floor(Math.random() * 5 + 5);
    bubble.style.top = `${top}%`;
    bubble.style.left = `${left}%`;

    // 打字机效果实现（务必用cleanMessage）
    let i = 0;
    bubble.textContent = '';
    elements.chatBubblesContainer.appendChild(bubble);
    const typingSpeed = 40; // 每个字的间隔(ms)
    function typeWriter() {
        if (i < cleanMessage.length) {
            bubble.textContent += cleanMessage[i];
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }
    typeWriter();

    // 设置自动消失（从气泡完全显示后计时）
    setTimeout(() => {
        bubble.remove();
    }, Math.max(BUBBLE_DURATION, cleanMessage.length * typingSpeed + 3000));
}

// 发送用户消息
async function sendUserMessage() {
    const userMessage = elements.chatInput.value.trim();
    if (!userMessage || appState.apiRequestInProgress) return;
    
    // 清空输入框
    elements.chatInput.value = '';
    
    // 清空现有气泡
    elements.chatBubblesContainer.innerHTML = '';
    
    // 标记API请求进行中
    appState.apiRequestInProgress = true;
    elements.sendButton.classList.add('loading');
    
    try {
        const response = await fetchAIResponse(userMessage);
        createChatBubble(response);
    } catch (error) {
        console.error('获取AI回复失败:', error);
        createChatBubble(`哎呀，魔法通讯出了问题！(${error.message})`);
    } finally {
        appState.apiRequestInProgress = false;
        elements.sendButton.classList.remove('loading');
    }
}

// 获取AI回复
async function fetchAIResponse(userMessage) {
    try {
        const response = await fetch('https://aigc.sankuai.com/v1/openai/native/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 21914592387301802032',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "model": "deepseek-r1-friday",
                "messages": [
                    {
                        "role": "user",
                        "content": `请和我角色扮演，以迷宫饭里的玛露西尔风格回答我的消息（20字以内，语气开朗活泼），接下来是消息：【${userMessage}】`
                    }
                ],
                "stream": false
            })
        });
        
        if (!response.ok) {
            throw new Error(`API请求失败: ${response.status}`);
        }
        
        // 由于是流式响应，我们需要简化处理，实际实现可能需要更复杂的逻辑
        const reader = response.body.getReader();
        let result = '';
        
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            // 将二进制数据转换为文本
            const chunk = new TextDecoder().decode(value);
            
            // 处理数据块，提取AI回复
            // 注意：实际实现需要根据API的具体流式响应格式进行处理
            // 这里是简化处理，实际可能需要解析JSON、处理SSE等
            if (chunk.includes('content')) {
                const matches = chunk.match(/"content":"([^"]*)"/g);
                if (matches) {
                    for (const match of matches) {
                        const content = match.replace('"content":"', '').replace('"', '');
                        result += content;
                    }
                }
            }
        }
        
        // 如果没有获取到结果，返回一个默认回复
        if (!result.trim()) {
            result = "魔法连接似乎有点问题，等会再试试吧！(*╯°□°)╯";
        }
        // 新增：去除所有换行、制表符、全角空格等不可见字符，并合并多余空白
        result = result.replace(/[\n\r\t\u3000]+/g, ' ').replace(/ +/g, ' ').trim();
        return result;
    } catch (error) {
        console.error('API请求错误:', error);
        throw error;
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    // 尝试自动播放音频
    tryAutoPlayAudio();
});

// 自动播放音频逻辑
function tryAutoPlayAudio() {
    const playPromise = elements.audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // 如果被拦截，则在用户首次交互时再播放一次
            const resumeAudio = () => {
                elements.audio.play();
                window.removeEventListener('click', resumeAudio);
                window.removeEventListener('touchstart', resumeAudio);
            };
            window.addEventListener('click', resumeAudio);
            window.addEventListener('touchstart', resumeAudio);
        });
    }
}

// 打开弹窗
function showModal(modal) {
    modal.classList.remove('hidden', 'hide-anim');
}

// 关闭弹窗（带动效）
function hideModal(modal) {
    modal.classList.add('hide-anim');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('hide-anim');
    }, 300); // 动画时长与CSS一致
} 