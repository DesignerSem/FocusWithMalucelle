# 和玛露西尔一起专注

这是一个专注力应用，以迷宫饭动漫角色玛露西尔为伴，帮助用户在专注时提供放松的环境和鼓励。

## 应用功能

* **多场景选择**：提供RAIN（雨天）、SNOW（雪天）、CLOUD（多云）三种环境场景
* **专注计时器**：自定义专注时长（1-60分钟），有倒计时显示
* **角色互动**：与玛露西尔进行实时聊天，在不同阶段收到她的鼓励和互动消息
* **环境设置**：调整音量，获得最佳专注体验

## 使用方法

1. **开始使用**：
   - 点击START按钮开始专注
   - 在专注过程中，倒计时会显示在按钮上
   - 点击CANCEL可以随时取消专注

2. **场景选择**：
   - 点击SCENE按钮打开场景选择界面
   - 选择RAIN、SNOW或CLOUD三种场景之一
   - 点击CLOSE确认选择

3. **设置**：
   - 点击SETTING按钮打开设置界面
   - 调整VOLUME滑块控制音量大小
   - MOTION选项（动画效果）目前尚未实现
   - 点击CLOSE保存设置

4. **与玛露西尔聊天**：
   - 在底部输入框中输入消息
   - 点击SEND或按Enter键发送
   - 玛露西尔会以她特有的风格回复你的消息

## 目录结构

```
assets/
  ├── videos/        # 场景视频
  ├── audios/        # 场景音频
  ├── fonts/         # 字体文件
  └── images/        # 预览图片
src/
  ├── app.js         # 主要JavaScript代码
  └── styles.css     # 样式文件
index.html           # 主页面
```

## 注意事项

* 为了获得最佳体验，请确保已将媒体文件放入正确的目录中：
  * 视频文件：`assets/videos/`目录下
  * 音频文件：`assets/audios/`目录下
  * 字体文件：`assets/fonts/`目录下
  * 预览图片：`assets/images/`目录下

* 文件命名格式：
  * 视频：`{场景名}_unfocused.mp4`、`{场景名}_focusing.mp4`、`{场景名}_completed.mp4`
  * 音频：`{场景名}_unfocused.mp3`、`{场景名}_focusing.mp3`、`{场景名}_completed.mp3`
  * 场景预览图：`{场景名}_preview.png`

* 必需的字体文件：
  * ChillPixels-Matrix.woff2
  * Aa幻梦空间像素体.woff2 