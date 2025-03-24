# 霖珊的期末目标 高二上学期

<style>
.score-table {
  max-width: 550px;
  width: 100%;
  table-layout: fixed; /* 确保表格列宽平均分配 */
  border-collapse: collapse;
  margin: 25px auto;
  box-shadow: 
    0 0 30px rgba(218, 165, 32, 0.7),
    0 0 60px rgba(255, 215, 0, 0.6),
    0 0 100px rgba(255, 215, 0, 0.4),
    0 0 15px rgba(255, 255, 255, 0.5) inset;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateX(3deg);
  animation: tablePulse 6s infinite alternate, tableFloat 8s ease-in-out infinite;
  z-index: 1;
  transition: all 0.5s ease;
}

.score-table:hover {
  transform: perspective(1000px) rotateX(5deg) scale(1.02);
  box-shadow: 
    0 0 40px rgba(218, 165, 32, 0.8),
    0 0 80px rgba(255, 215, 0, 0.7),
    0 0 120px rgba(255, 215, 0, 0.5),
    0 0 20px rgba(255, 255, 255, 0.6) inset;
}

@keyframes tablePulse {
  0% {
    box-shadow: 
      0 0 30px rgba(218, 165, 32, 0.7),
      0 0 60px rgba(255, 215, 0, 0.4),
      0 0 100px rgba(255, 215, 0, 0.2),
      0 0 15px rgba(255, 255, 255, 0.5) inset;
  }
  100% {
    box-shadow: 
      0 0 50px rgba(218, 165, 32, 0.9),
      0 0 80px rgba(255, 215, 0, 0.7),
      0 0 120px rgba(255, 215, 0, 0.5),
      0 0 20px rgba(255, 255, 255, 0.7) inset;
  }
}

@keyframes tableFloat {
  0%, 100% { transform: perspective(1000px) rotateX(3deg) translateY(0); }
  50% { transform: perspective(1000px) rotateX(3deg) translateY(-10px); }
}

/* 更加金碧辉煌的样式 */
.golden-table {
  background: linear-gradient(135deg, 
    rgba(254, 252, 234, 1) 0%, 
    rgba(241, 218, 54, 0.8) 40%, 
    rgba(254, 252, 234, 1) 60%, 
    rgba(212, 175, 55, 0.9) 100%);
  background-size: 200% 200%;
  animation: gradientBG 15s ease infinite;
  border: 8px solid;
  border-image: linear-gradient(45deg, #ffd700, #b8860b, #ffd700, #daa520, #ffd700) 1;
  border-image-slice: 1;
  position: relative;
  overflow: hidden;
}

@keyframes gradientBG {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}

.golden-table::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 20%, rgba(255, 215, 0, 0.4), transparent 25%),
    radial-gradient(circle at 70% 20%, rgba(255, 215, 0, 0.4), transparent 25%),
    radial-gradient(circle at 50% 50%, rgba(255, 223, 0, 0.2), transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.4), transparent 25%),
    radial-gradient(circle at 80% 80%, rgba(255, 215, 0, 0.4), transparent 25%);
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 2;
}

.golden-table::after {
  content: "";
  position: absolute;
  top: -150%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
  transform: rotate(30deg);
  animation: shine 8s infinite linear;
  z-index: 3;
  pointer-events: none;
}

@keyframes shine {
  0% { top: -150%; }
  20% { top: 100%; }
  100% { top: 100%; }
}

.golden-table thead {
  background: linear-gradient(45deg, #b8860b, #ffd700, #daa520, #ffd700, #b8860b);
  background-size: 200% 200%;
  animation: shimmer 5s infinite linear;
  position: relative;
  z-index: 1;
}

@keyframes shimmer {
  0% { background-position: 0% 50% }
  100% { background-position: 200% 50% }
}

.golden-table th {
  color: #000000;
  font-weight: bold;
  text-shadow: 
    0 0 5px rgba(255, 255, 255, 1),
    0 0 10px rgba(255, 215, 0, 0.9),
    1px 1px 2px rgba(255, 255, 255, 1);
  padding: 20px 15px;
  letter-spacing: 2px;
  border-bottom: 2px solid rgba(178, 134, 11, 0.5);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  font-size: 1.2em;
  font-family: "Arial Black", "Microsoft YaHei Bold", sans-serif;
}

.golden-table th::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  transform: translateX(-100%);
  animation: thSlide 5s infinite;
  z-index: -1;
}

@keyframes thSlide {
  0% { transform: translateX(-100%) }
  20% { transform: translateX(100%) }
  100% { transform: translateX(100%) }
}

.golden-table th::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
  height: 2px;
  background: linear-gradient(to right, transparent, rgba(255, 215, 0, 1), transparent);
  box-shadow: 0 0 8px 1px rgba(255, 215, 0, 0.8);
}

.golden-table td {
  padding: 15px;
  border-bottom: 1px solid rgba(218, 165, 32, 0.3);
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
}

.golden-table tr {
  position: relative;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
}

.golden-table tr:hover {
  transform: translateZ(15px);
  z-index: 10;
}

.golden-table tr:hover td {
  background-color: rgba(139, 69, 19, 0.1);
  box-shadow: inset 0 0 20px rgba(255, 215, 0, 0.4);
}

.golden-table tr:hover td::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: translateX(-100%);
  animation: rowLight 0.8s forwards;
  pointer-events: none;
}

@keyframes rowLight {
  to { transform: translateX(100%) }
}

.golden-table tr:last-child {
  background: linear-gradient(45deg, #b8860b, #ffd700, #daa520);
  background-size: 200% auto;
  animation: goldPulse 3s infinite alternate;
  font-weight: bold;
  position: relative;
  z-index: 2;
}

@keyframes goldPulse {
  0% { background-position: 0% 50% }
  100% { background-position: 100% 50% }
}

.golden-table tr:last-child td {
  color: #000000;
  text-shadow: 
    0 0 8px rgba(255, 255, 255, 1),
    0 0 10px rgba(255, 215, 0, 0.9),
    1px 1px 2px rgba(255, 255, 255, 1);
  padding: 20px 15px;
  font-size: 1.2em;
  font-weight: 900;
  letter-spacing: 1px;
}

/* 强调突出效果 */
.highlight-cell {
  position: relative;
}

.highlight-cell span {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
  transform: perspective(500px) translateZ(5px);
  transition: transform 0.3s ease;
}

.highlight-cell:hover span {
  transform: perspective(500px) translateZ(10px) scale(1.1);
}

.highlight-cell::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.6) 0%, transparent 70%);
  animation: pulseGlow 2s infinite alternate;
  z-index: 0;
  border-radius: 6px;
}

@keyframes pulseGlow {
  0% { opacity: 0.5; }
  100% { opacity: 1; }
}

/* 逐步提升的效果 - 用于第二个表格 */
.progress-step-1 {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(218, 165, 32, 0.08) 100%);
}

.progress-step-2 {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(218, 165, 32, 0.15) 100%);
}

.progress-step-3 {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(218, 165, 32, 0.23) 100%);
}

.progress-step-4 {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(218, 165, 32, 0.3) 100%);
}

.progress-step-5 {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.25) 0%, rgba(218, 165, 32, 0.38) 100%);
}

.progress-step-6 {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.3) 0%, rgba(218, 165, 32, 0.45) 100%);
}

.progress-step-7 {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.35) 0%, rgba(218, 165, 32, 0.53) 100%);
}

.progress-step-8 {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.4) 0%, rgba(218, 165, 32, 0.6) 100%);
}

.progress-step-9 {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.45) 0%, rgba(218, 165, 32, 0.68) 100%);
}

.progress-step-10 {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.5) 0%, rgba(218, 165, 32, 0.75) 100%);
  box-shadow: inset 0 0 20px rgba(255, 215, 0, 0.4);
}

.cell {
  text-align: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 15px 5px; /* 调整内边距使内容更紧凑 */
  font-size: 1.1em; /* 增大字体大小 */
  font-family: "Arial", "Microsoft YaHei", sans-serif; /* 添加更现代的字体 */
}

.green {
  color: #000;
  font-weight: bold;
  position: relative;
  text-shadow: 
    0 0 8px rgba(255, 255, 255, 1),
    0 0 4px rgba(255, 255, 255, 1),
    0 0 2px rgba(255, 255, 255, 1),
    0 1px 0 #fff,
    0 -1px 0 #fff,
    1px 0 0 #fff,
    -1px 0 0 #fff;
  background: linear-gradient(to right, #d4af37, #fff8a6, #d4af37);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textShine 3s linear infinite;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.9));
  transform: perspective(500px) translateZ(1px);
  font-size: 1.1em;
  letter-spacing: 1px;
}

.green::after {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: #000;
  z-index: -1;
  opacity: 0.3;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,0.5);
}

@keyframes textShine {
  0% { background-position: 0% center }
  50% { background-position: 100% center }
  100% { background-position: 200% center }
}

.red {
  color: #fff;
  text-shadow: 
    0 0 10px #f00,
    0 0 14px #f00,
    0 0 18px #800,
    0 1px 0 #800,
    0 -1px 0 #800,
    1px 0 0 #800,
    -1px 0 0 #800;
  font-weight: bold;
  position: relative;
  transform: perspective(500px) translateZ(1px);
  font-size: 1.1em;
  letter-spacing: 1px;
}

.red::after {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: #800;
  z-index: -1;
  opacity: 0.4;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(255,0,0,0.6);
}

/* 进度指示器 - 装饰性星星 */
.progress-indicator {
  display: inline-block;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  vertical-align: middle;
  position: relative;
  animation: starSpin 10s linear infinite, starFloat 3s ease-in-out infinite alternate;
  filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.8));
}

@keyframes starSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes starFloat {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(-5px) rotate(180deg); }
}

.progress-indicator::before,
.progress-indicator::after {
  content: "★";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8em;
}

.progress-indicator::before {
  color: #fff;
  text-shadow: 
    0 0 15px gold, 
    0 0 25px gold,
    0 0 35px rgba(255, 215, 0, 0.8);
  animation: starPulse 1.5s infinite alternate;
  filter: blur(1px);
}

.progress-indicator::after {
  color: gold;
  animation: starPulse 1.5s infinite alternate-reverse;
  filter: drop-shadow(0 0 12px gold) drop-shadow(0 0 18px gold);
}

@keyframes starPulse {
  0% { 
    transform: translate(-50%, -50%) scale(0.8); 
    opacity: 0.8;
  }
  100% { 
    transform: translate(-50%, -50%) scale(1.2); 
    opacity: 1;
  }
}

/* 装饰性标题 */
.fancy-title {
  text-align: center;
  margin: 45px 0 35px;
  font-size: 2.5em;
  font-weight: 900;
  background: linear-gradient(45deg, #B8860B, #FFD700, #FFF8DC, #DAA520, #FFD700);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  padding: 0 60px;
  width: 100%;
  letter-spacing: 3px;
  animation: titleGradient 5s linear infinite, titleFloat 4s ease-in-out infinite;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 1)) drop-shadow(0 0 6px rgba(0, 0, 0, 0.8));
  font-family: "Arial Black", "Microsoft YaHei Bold", sans-serif;
  text-transform: uppercase;
  overflow: hidden;
}

@keyframes titleGradient {
  to { background-position: 200% center }
}

@keyframes titleFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.fancy-title::before,
.fancy-title::after {
  content: "✦";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: gold;
  text-shadow: 
    0 0 15px gold, 
    0 0 25px gold, 
    0 0 35px gold, 
    0 0 45px rgba(255, 215, 0, 0.8);
  font-size: 1.6em;
  filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.9));
  animation: starGlow 3s infinite alternate, starRotate 10s linear infinite;
}

@keyframes starGlow {
  0% { 
    opacity: 0.7; 
    text-shadow: 0 0 10px gold, 0 0 20px gold, 0 0 30px gold;
  }
  100% { 
    opacity: 1; 
    text-shadow: 0 0 15px gold, 0 0 25px gold, 0 0 40px gold, 0 0 55px gold;
  }
}

@keyframes starRotate {
  0% { transform: translateY(-50%) rotate(0deg); }
  100% { transform: translateY(-50%) rotate(360deg); }
}

.fancy-title::before {
  left: 10%;
}

.fancy-title::after {
  right: 10%;
}

/* 标题光晕效果 */
.fancy-title::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(circle at center, rgba(255, 215, 0, 0.4), transparent 60%);
  z-index: -1;
  animation: titleHalo 5s infinite alternate;
}

@keyframes titleHalo {
  0% { 
    opacity: 0.3;
    transform: scale(0.8);
  }
  100% { 
    opacity: 0.7;
    transform: scale(1.2);
  }
}

.fancy-title span {
  position: relative;
  display: inline-block;
  animation: letterFloat 3s ease-in-out infinite;
  animation-delay: calc(0.1s * var(--i));
}

@keyframes letterFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* 创建带有闪亮星星的装饰元素 */
.star-decoration {
  position: fixed;
  pointer-events: none;
  z-index: -1;
  font-size: 24px;
  color: gold;
  text-shadow: 0 0 10px gold, 0 0 20px gold, 0 0 30px rgba(255, 215, 0, 0.8);
  filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
}

.star-decoration:nth-child(1) {
  top: 10%;
  left: 7%;
  font-size: 38px;
  animation: starDecoration 8s infinite alternate;
}

.star-decoration:nth-child(2) {
  top: 20%;
  right: 7%;
  font-size: 24px;
  animation: starDecoration 12s infinite alternate-reverse;
}

.star-decoration:nth-child(3) {
  bottom: 25%;
  left: 5%;
  font-size: 42px;
  animation: starDecoration 10s infinite alternate;
}

.star-decoration:nth-child(4) {
  bottom: 15%;
  right: 4%;
  font-size: 32px;
  animation: starDecoration 9s infinite alternate-reverse;
}

@keyframes starDecoration {
  0% {
    transform: scale(0.8) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: scale(1.2) rotate(360deg);
    opacity: 0.3;
  }
}

/* 页面背景效果 */
body {
  position: relative;
  overflow-x: hidden;
  background: #000;
  color: #fff;
}

body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.1), transparent 30%),
    radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.1), transparent 30%),
    radial-gradient(circle at 50% 80%, rgba(255, 215, 0, 0.1), transparent 40%);
  pointer-events: none;
  z-index: -1;
}

/* 链接样式 */
a {
  color: #ffcc00;
  text-decoration: none;
  position: relative;
  transition: all 0.3s;
  z-index: 1;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 
    0 0 4px rgba(0, 0, 0, 0.9),
    0 0 8px rgba(0, 0, 0, 0.7);
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 5px rgba(255, 215, 0, 0.3);
  transform: perspective(500px) translateZ(0);
  transition: all 0.3s ease;
}

a:hover {
  color: #ffffff;
  text-shadow: 
    0 0 5px rgba(255, 215, 0, 0.8), 
    0 0 10px rgba(255, 215, 0, 0.7),
    0 0 15px rgba(255, 215, 0, 0.5);
  background: rgba(255, 215, 0, 0.2);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  transform: perspective(500px) translateZ(10px) scale(1.03);
}

/* 两个表格的列宽分配 */
/* 第一个表格 - 成绩表 */
.scores-columns th:nth-child(1),
.scores-columns td:nth-child(1) {
  width: 25%;
}
.scores-columns th:nth-child(2),
.scores-columns td:nth-child(2) {
  width: 25%;
}
.scores-columns th:nth-child(3),
.scores-columns td:nth-child(3) {
  width: 25%;
}
.scores-columns th:nth-child(4),
.scores-columns td:nth-child(4) {
  width: 25%;
}

/* 第二个表格 - 奖励表 */
.reward-columns th:nth-child(1),
.reward-columns td:nth-child(1) {
  width: 20%;
}
.reward-columns th:nth-child(2),
.reward-columns td:nth-child(2) {
  width: 60%;
}
.reward-columns th:nth-child(3),
.reward-columns td:nth-child(3) {
  width: 20%;
}

/* 为了解决表格宽度一致性问题的修复 */
table {
  width: 100%;
}

/* 闪耀粒子效果 */
.shiny-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: gold;
  border-radius: 50%;
  opacity: 0;
  box-shadow:
    0 0 6px gold,
    0 0 10px rgba(255, 215, 0, 0.8);
  animation: particles-animation 6s ease-in-out infinite;
}

@keyframes particles-animation {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(-1000%) rotate(720deg);
    opacity: 0;
  }
}

/* 添加CSS变量来控制一些关键颜色 */
:root {
  --gold-light: #FFD700;
  --gold-medium: #D4AF37;
  --gold-dark: #B8860B;
  --text-shadow-light: rgba(255, 255, 255, 1);
  --text-shadow-gold: rgba(255, 215, 0, 0.9);
}

/* 响应式设计优化 */
@media (max-width: 768px) {
  .fancy-title {
    font-size: 2em;
    padding: 0 40px;
  }
  
  .cell {
    font-size: 1em;
    padding: 10px 3px;
  }
  
  .golden-table th {
    font-size: 1.1em;
    padding: 15px 10px;
  }
}

/* 奖励金额样式 */
.reward-amount {
  color: #000;
  font-weight: 900;
  font-size: 1.2em;
  position: relative;
  padding: 5px 10px;
  border-radius: 6px;
  background: linear-gradient(145deg, #ffd700, #ffa500);
  box-shadow: 
    0 0 10px rgba(255, 215, 0, 0.8),
    0 0 20px rgba(255, 215, 0, 0.4),
    inset 0 0 8px rgba(255, 255, 255, 0.8);
  text-shadow: 
    0 0 4px #fff,
    0 0 8px #fff,
    1px 1px 0 #fff,
    -1px -1px 0 #fff;
  letter-spacing: 1px;
  display: inline-block;
  transform: perspective(500px) translateZ(10px);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 215, 0, 0.6);
  animation: rewardPulse 2s infinite alternate;
}

.reward-amount:hover {
  transform: perspective(500px) translateZ(20px) scale(1.1);
  box-shadow: 
    0 0 15px rgba(255, 215, 0, 0.9),
    0 0 30px rgba(255, 215, 0, 0.6),
    inset 0 0 12px rgba(255, 255, 255, 0.9);
}

@keyframes rewardPulse {
  0% {
    box-shadow: 
      0 0 10px rgba(255, 215, 0, 0.8),
      0 0 20px rgba(255, 215, 0, 0.4),
      inset 0 0 8px rgba(255, 255, 255, 0.8);
  }
  100% {
    box-shadow: 
      0 0 15px rgba(255, 215, 0, 0.9),
      0 0 25px rgba(255, 215, 0, 0.6),
      0 0 40px rgba(255, 215, 0, 0.3),
      inset 0 0 12px rgba(255, 255, 255, 0.9);
  }
}

/* 增强表格总计行 */
.golden-table tr:last-child td strong {
  font-size: 1.2em;
  font-weight: 900;
  color: #000;
  background: linear-gradient(to right, #B8860B, #FFD700, #FFF8DC, #FFD700, #B8860B);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: totalShine 3s linear infinite;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 1));
  display: inline-block;
  padding: 5px 10px;
  border-radius: 6px;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
  position: relative;
  transform: perspective(500px) translateZ(5px);
}

@keyframes totalShine {
  0% { background-position: 0% center }
  50% { background-position: 100% center }
  100% { background-position: 200% center }
}

.golden-table tr:last-child td strong::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(255, 215, 0, 0.6), transparent 70%);
  border-radius: 6px;
  z-index: -1;
  animation: totalGlow 2s infinite alternate;
}

@keyframes totalGlow {
  0% { opacity: 0.5; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1.05); }
}

/* 成绩数字样式 */
.score-num {
  font-size: 1.3em;
  font-weight: 900;
  font-family: 'Arial', sans-serif;
  padding: 2px 10px;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: #000;
  text-shadow: 0 0 5px rgba(255, 255, 255, 1);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  transform: perspective(500px) translateZ(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.score-num:hover {
  transform: perspective(500px) translateZ(15px) scale(1.1);
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
}

.green-bg {
  background: linear-gradient(145deg, #90EE90, #32CD32);
  color: #000;
  text-shadow: 
    0 0 5px rgba(255, 255, 255, 1),
    0 0 10px rgba(255, 255, 255, 0.8);
  box-shadow: 
    0 0 10px rgba(50, 205, 50, 0.5),
    inset 0 0 5px rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(50, 205, 50, 0.6);
}

.red-bg {
  background: linear-gradient(145deg, #FFA07A, #CD5C5C);
  color: #000;
  text-shadow: 
    0 0 5px rgba(255, 255, 255, 1),
    0 0 10px rgba(255, 255, 255, 0.8);
  box-shadow: 
    0 0 10px rgba(205, 92, 92, 0.5),
    inset 0 0 5px rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(205, 92, 92, 0.6);
}

.perfect-score {
  background: linear-gradient(145deg, #FFD700, #FFA500);
  color: #000;
  text-shadow: 
    0 0 5px rgba(255, 255, 255, 1),
    0 0 10px rgba(255, 255, 255, 0.8);
  box-shadow: 
    0 0 15px rgba(255, 215, 0, 0.7),
    0 0 30px rgba(255, 215, 0, 0.4),
    inset 0 0 8px rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.6);
  animation: perfectPulse 2s infinite alternate;
  letter-spacing: 1px;
}

@keyframes perfectPulse {
  0% {
    box-shadow: 
      0 0 15px rgba(255, 215, 0, 0.7),
      0 0 30px rgba(255, 215, 0, 0.4),
      inset 0 0 8px rgba(255, 255, 255, 0.8);
    transform: perspective(500px) translateZ(5px);
  }
  100% {
    box-shadow: 
      0 0 20px rgba(255, 215, 0, 0.9),
      0 0 40px rgba(255, 215, 0, 0.6),
      0 0 60px rgba(255, 215, 0, 0.3),
      inset 0 0 12px rgba(255, 255, 255, 0.9);
    transform: perspective(500px) translateZ(15px);
  }
}

/* 总计金额样式 */
.total-amount {
  font-size: 1.5em;
  font-weight: 900;
  color: #000;
  background: linear-gradient(to right, #B8860B, #FFD700, #FFF8DC, #FFD700, #B8860B);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: totalShine 3s linear infinite;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 1));
  display: inline-block;
  padding: 5px 15px;
  border-radius: 8px;
  box-shadow: 
    0 0 20px rgba(255, 215, 0, 0.8),
    0 0 40px rgba(255, 215, 0, 0.5);
  position: relative;
  transform: perspective(500px) translateZ(15px);
  letter-spacing: 2px;
  border: 2px solid rgba(255, 215, 0, 0.6);
}

.total-amount::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(255, 215, 0, 0.6), transparent 70%);
  border-radius: 6px;
  z-index: -1;
  animation: totalGlow 2s infinite alternate;
}

/* 惩罚金额样式 */
.penalty-amount {
  color: #fff;
  font-weight: 900;
  font-size: 1.2em;
  position: relative;
  padding: 5px 10px;
  border-radius: 6px;
  background: linear-gradient(145deg, #c00, #800);
  box-shadow: 
    0 0 10px rgba(255, 0, 0, 0.6),
    0 0 20px rgba(255, 0, 0, 0.3),
    inset 0 0 8px rgba(255, 100, 100, 0.5);
  text-shadow: 
    0 0 4px #300,
    0 0 8px #500,
    1px 1px 0 #600,
    -1px -1px 0 #600;
  letter-spacing: 1px;
  display: inline-block;
  transform: perspective(500px) translateZ(10px);
  transition: all 0.3s ease;
  border: 1px solid rgba(200, 0, 0, 0.6);
  animation: penaltyPulse 2s infinite alternate;
}

.penalty-amount:hover {
  transform: perspective(500px) translateZ(20px) scale(1.1);
  box-shadow: 
    0 0 15px rgba(255, 0, 0, 0.8),
    0 0 30px rgba(255, 0, 0, 0.5),
    inset 0 0 12px rgba(255, 100, 100, 0.6);
}

@keyframes penaltyPulse {
  0% {
    box-shadow: 
      0 0 10px rgba(255, 0, 0, 0.6),
      0 0 20px rgba(255, 0, 0, 0.3),
      inset 0 0 8px rgba(255, 100, 100, 0.5);
  }
  100% {
    box-shadow: 
      0 0 15px rgba(255, 0, 0, 0.8),
      0 0 25px rgba(255, 0, 0, 0.5),
      0 0 40px rgba(255, 0, 0, 0.3),
      inset 0 0 12px rgba(255, 100, 100, 0.6);
  }
}

/* 添加页面环绕光晕效果 */
body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: 
    radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.25), transparent 45%),
    radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.25), transparent 45%),
    radial-gradient(circle at 50% 80%, rgba(255, 215, 0, 0.25), transparent 55%);
  animation: bgGlow 10s infinite alternate;
  mix-blend-mode: screen;
  z-index: -2;
}

@keyframes bgGlow {
  0% {
    opacity: 0.3;
    background-position: 0% 0%, 100% 0%, 50% 100%;
  }
  100% {
    opacity: 0.9;
    background-position: 10% 10%, 90% 10%, 50% 90%;
  }
}

/* 粒子效果 CSS 修复 */
@keyframes particleFollow {
  0% {
    opacity: 1;
    transform: translateY(0) translateX(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px) translateX(0) scale(0);
  }
}

.particle-star {
  animation: starTwinkle 3s infinite alternate;
}

@keyframes starTwinkle {
  0% { opacity: 0.3; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1.2); }
}

/* 改进标题动画 */
.fancy-title span {
  position: relative;
  display: inline-block;
  animation: letterFloat 3s ease-in-out infinite;
  animation-delay: calc(0.1s * var(--i));
  transition: all 0.3s ease;
}

.fancy-title:hover span {
  animation-play-state: paused;
  transform: scale(1.2);
  filter: brightness(1.2);
}

@keyframes letterFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* 添加更多光效效果 */
.light-effects {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.light-beam {
  position: absolute;
  bottom: -50%;
  width: 150px;
  height: 800px;
  background: linear-gradient(to top, 
    rgba(255, 215, 0, 0.05),
    rgba(255, 215, 0, 0.1),
    rgba(255, 215, 0, 0.2),
    rgba(255, 215, 0, 0.1),
    rgba(255, 215, 0, 0.05),
    transparent);
  filter: blur(10px);
  transform: rotate(25deg);
  opacity: 0;
  animation: beamMove 15s infinite linear;
}

.light-beam:nth-child(1) {
  left: 10%;
  animation-delay: 0s;
  animation-duration: 16s;
  transform: rotate(25deg);
}

.light-beam:nth-child(2) {
  left: 30%;
  animation-delay: 4s;
  animation-duration: 17s;
  transform: rotate(15deg);
}

.light-beam:nth-child(3) {
  left: 60%;
  animation-delay: 8s;
  animation-duration: 18s;
  transform: rotate(-15deg);
}

.light-beam:nth-child(4) {
  left: 80%;
  animation-delay: 12s;
  animation-duration: 19s;
  transform: rotate(-25deg);
}

@keyframes beamMove {
  0% {
    opacity: 0;
    transform-origin: bottom center;
    transform: rotate(25deg) translateY(0) scaleY(1);
  }
  20% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.5;
    transform-origin: bottom center;
    transform: rotate(25deg) translateY(-30%) scaleY(1.2);
  }
  80% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
    transform-origin: bottom center;
    transform: rotate(25deg) translateY(-60%) scaleY(0.8);
  }
}
</style>

<!-- 添加闪耀粒子效果 -->
<div class="shiny-particles">
  <div class="particle" style="left: 10%; animation-delay: 0s;"></div>
  <div class="particle" style="left: 20%; animation-delay: 1s;"></div>
  <div class="particle" style="left: 30%; animation-delay: 2s;"></div>
  <div class="particle" style="left: 40%; animation-delay: 0.5s;"></div>
  <div class="particle" style="left: 50%; animation-delay: 1.5s;"></div>
  <div class="particle" style="left: 60%; animation-delay: 2.5s;"></div>
  <div class="particle" style="left: 70%; animation-delay: 0.2s;"></div>
  <div class="particle" style="left: 80%; animation-delay: 1.2s;"></div>
  <div class="particle" style="left: 90%; animation-delay: 2.2s;"></div>
</div>

<div class="fancy-title">
  <span style="--i:1">目</span>
  <span style="--i:2">标</span>
  <span style="--i:3">与</span>
  <span style="--i:4">成</span>
  <span style="--i:5">绩</span>
  <span style="--i:6"> </span>
  <span style="--i:7">✦</span>
  <span style="--i:8"> </span>
  <span style="--i:9">荣</span>
  <span style="--i:10">誉</span>
  <span style="--i:11">榜</span>
</div>

<table class="score-table golden-table scores-columns">
  <thead>
    <tr>
      <th class="cell">科目</th>
      <th class="cell">目标</th>
      <th class="cell">成绩</th>
      <th class="cell">奖惩</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="cell highlight-cell"><span class="green">语文</span></td>
      <td class="cell"><span class="score-num">85</span></td>
      <td class="cell"><span class="score-num green-bg">93</span></td>
      <td class="cell highlight-cell"><span class="reward-amount">165元</span></td>
    </tr>
    <tr>
      <td class="cell highlight-cell"><span class="green">数学</span></td>
      <td class="cell"><span class="score-num">90</span></td>
      <td class="cell highlight-cell"><span class="score-num perfect-score">100</span></td>
      <td class="cell highlight-cell"><span class="reward-amount">190元</span></td>
    </tr>
    <tr>
      <td class="cell highlight-cell"><span class="green">英语</span></td>
      <td class="cell"><span class="score-num">60</span></td>
      <td class="cell"><span class="score-num green-bg">88</span></td>
      <td class="cell highlight-cell"><span class="reward-amount">340元</span></td>
    </tr>
    <tr>
      <td class="cell"><span class="red">美术</span></td>
      <td class="cell"><span class="score-num">85</span></td>
      <td class="cell"><span class="score-num red-bg">80</span></td>
      <td class="cell"><span class="penalty-amount">-50元</span></td>
    </tr>
    <tr>
      <td class="cell highlight-cell"><span class="green">舞蹈</span></td>
      <td class="cell"><span class="score-num">90</span></td>
      <td class="cell"><span class="score-num green-bg">94</span></td>
      <td class="cell"><span class="reward-amount">130元</span></td>
    </tr>
    <tr>
      <td class="cell"><span class="green">钢琴</span></td>
      <td class="cell"><span class="score-num">90</span></td>
      <td class="cell"><span class="score-num green-bg">91</span></td>
      <td class="cell"><span class="reward-amount">100元</span></td>
    </tr>
    <tr>
      <td class="cell highlight-cell"><span class="green">声乐</span></td>
      <td class="cell"><span class="score-num">90</span></td>
      <td class="cell"><span class="score-num green-bg">93</span></td>
      <td class="cell"><span class="reward-amount">120元</span></td>
    </tr>
    <tr>
      <td class="cell"><span class="red">政治</span></td>
      <td class="cell"><span class="score-num">90</span></td>
      <td class="cell"><span class="score-num red-bg">88</span></td>
      <td class="cell"><span class="penalty-amount">-20元</span></td>
    </tr>
    <tr>
      <td class="cell"><span class="green">保育</span></td>
      <td class="cell"><span class="score-num">90</span></td>
      <td class="cell"><span class="score-num green-bg">91.5</span></td>
      <td class="cell"><span class="reward-amount">105元</span></td>
    </tr>
    <tr>
      <td class="cell highlight-cell"><span class="green">教育</span></td>
      <td class="cell"><span class="score-num">90</span></td>
      <td class="cell highlight-cell"><span class="score-num perfect-score">100</span></td>
      <td class="cell highlight-cell"><span class="reward-amount">190元</span></td>
    </tr>
    <tr>
      <td class="cell"><strong>总计</strong></td>
      <td class="cell"></td>
      <td class="cell"></td>
      <td class="cell"><strong class="total-amount">1270元</strong></td>
    </tr>
  </tbody>
</table>

> 奖惩计算公式
>
> - 成绩达标或超标：奖励 = (成绩 - 目标) × 10 + 目标
> - 成绩未达标：惩罚 = (目标 - 成绩) × 10
>
> *注：奖励金额单位为元*

<div class="fancy-title">
  <span style="--i:1">奖</span>
  <span style="--i:2">惩</span>
  <span style="--i:3">执</span>
  <span style="--i:4">行</span>
  <span style="--i:5">情</span>
  <span style="--i:6">况</span>
  <span style="--i:7"> </span>
  <span style="--i:8">✦</span>
  <span style="--i:9"> </span>
  <span style="--i:10">成</span>
  <span style="--i:11">长</span>
  <span style="--i:12">轨</span>
  <span style="--i:13">迹</span>
</div>

总计奖励 1270 元，分 10 期发放，每期奖励 127 元。奖励将与双完美计划挂钩，每完成一次双完美计划即可获得一期奖励，激励学习持续进步。

<table class="score-table golden-table reward-columns">
  <thead>
    <tr>
      <th class="cell">期数</th>
      <th class="cell">双完美计划</th>
      <th class="cell">奖励金额</th>
    </tr>
  </thead>
  <tbody>
    <tr class="progress-step-1">
      <td class="cell"><div class="progress-indicator"></div> 1</td>
      <td class="cell"><a href="../../../study_record/ls/20250310_20250316/">2025/03/10 ~ 2025/03/16</a></td>
      <td class="cell highlight-cell"><span class="reward-amount">127元</span></td>
    </tr>
    <tr class="progress-step-2">
      <td class="cell"><div class="progress-indicator"></div> 2</td>
      <td class="cell"><a href="../../../study_record/ls/20250317_20250323/">2025/03/17 ~ 2025/03/23</a></td>
      <td class="cell highlight-cell"><span class="reward-amount">127元</span></td>
    </tr>
    <tr class="progress-step-3">
      <td class="cell"><div class="progress-indicator"></div> 3</td>
      <td class="cell"><a href="../../../study_record/ls/20250317_20250323/">2025/03/24 ~ 2025/03/30</a></td>
      <td class="cell highlight-cell"><span class="reward-amount">127元</span></td>
    </tr>
    <tr class="progress-step-4">
      <td class="cell"><div class="progress-indicator"></div> 4</td>
      <td class="cell"><a href="../../../study_record/ls/20250317_20250323/">2025/03/31 ~ 2025/04/06</a></td>
      <td class="cell highlight-cell"><span class="reward-amount">127元</span></td>
    </tr>
    <tr class="progress-step-5">
      <td class="cell"><div class="progress-indicator"></div> 5</td>
      <td class="cell"><a href="../../../study_record/ls/20250317_20250323/">2025/04/07 ~ 2025/04/13</a></td>
      <td class="cell highlight-cell"><span class="reward-amount">127元</span></td>
    </tr>
    <tr class="progress-step-6">
      <td class="cell"><div class="progress-indicator"></div> 6</td>
      <td class="cell"><a href="../../../study_record/ls/20250317_20250323/">2025/04/14 ~ 2025/04/20</a></td>
      <td class="cell highlight-cell"><span class="reward-amount">127元</span></td>
    </tr>
  </tbody>
</table>

<!-- 添加星星装饰元素 -->
<div class="star-decoration">✦</div>
<div class="star-decoration">✧</div>
<div class="star-decoration">✦</div>
<div class="star-decoration">✧</div>

<!-- 添加更多光效效果 -->
<div class="light-effects">
  <div class="light-beam"></div>
  <div class="light-beam"></div>
  <div class="light-beam"></div>
  <div class="light-beam"></div>
</div>

<!-- 更新粒子跟随效果脚本 -->
<script>
(function() {
  // 原有粒子效果代码
  const particlesContainer = document.querySelector('.shiny-particles');
  if (!particlesContainer) return;
  
  // 添加更多粒子
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // 随机位置
    const left = Math.random() * 100;
    
    // 随机延迟
    const delay = Math.random() * 10;
    
    // 随机大小
    const size = 1 + Math.random() * 5;
    
    // 随机透明度
    const opacityMax = 0.7 + Math.random() * 0.3;
    
    // 随机动画持续时间
    const duration = 5 + Math.random() * 8;
    
    particle.style.cssText = `
      left: ${left}%; 
      animation-delay: ${delay}s;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${duration}s;
    `;
    
    // 随机设置粒子类型
    if (Math.random() > 0.7) {
      particle.classList.add('particle-star');
      particle.textContent = '✦';
      particle.style.fontSize = `${10 + Math.random() * 10}px`;
      particle.style.background = 'transparent';
      particle.style.color = 'gold';
      particle.style.textShadow = '0 0 5px gold, 0 0 10px gold';
    }
    
    particlesContainer.appendChild(particle);
  }
  
  // 添加鼠标跟随粒子效果（修复版本）
  document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.6) { // 降低创建频率
      const follower = document.createElement('div');
      follower.className = 'particle particle-follower';
      
      // 随机大小
      const size = 2 + Math.random() * 3;
      // 随机偏移
      const randomX = (Math.random() * 100 - 50);
      
      follower.style.cssText = `
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: ${size}px;
        height: ${size}px;
        position: fixed;
      `;
      
      document.body.appendChild(follower);
      
      // 自定义动画，不依赖CSS变量
      setTimeout(() => {
        let opacity = 1;
        let y = 0;
        let scale = 1;
        const duration = 3000; // 3秒
        const startTime = Date.now();
        
        function animate() {
          const elapsedTime = Date.now() - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          opacity = 1 - progress;
          y = -100 * progress;
          x = randomX * progress;
          scale = 1 - progress;
          
          follower.style.opacity = opacity;
          follower.style.transform = `translateY(${y}px) translateX(${x}px) scale(${scale})`;
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            follower.remove();
          }
        }
        
        requestAnimationFrame(animate);
      }, 0);
    }
  });
})();
</script>

<style>
/* 改进标题动画 */
.fancy-title span {
  position: relative;
  display: inline-block;
  animation: letterFloat 3s ease-in-out infinite;
  animation-delay: calc(0.1s * var(--i));
  transition: all 0.3s ease;
}

.fancy-title:hover span {
  animation-play-state: paused;
  transform: scale(1.2);
  filter: brightness(1.2);
}

@keyframes letterFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* 粒子跟随效果 */
.particle-follower {
  opacity: 1;
  box-shadow: 0 0 10px gold, 0 0 20px gold;
  z-index: 1000;
}
</style>
