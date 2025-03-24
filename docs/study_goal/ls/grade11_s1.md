# 霖珊的期末目标 高二上学期

<style>
.score-table {
  max-width: 500px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(218, 165, 32, 0.3), 0 0 15px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 223, 0, 0.1);
  margin: 25px 0;
  background: linear-gradient(135deg, #fffcf0, #fff5d6, #fff8e1);
  position: relative;
}

.score-table:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-size: 12px 12px;
  pointer-events: none;
  z-index: 1;
  border-radius: 18px;
}

.score-table:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(255, 215, 0, 0.05) 0%, 
    rgba(255, 215, 0, 0) 20%, 
    rgba(255, 215, 0, 0.05) 40%, 
    rgba(255, 215, 0, 0) 60%, 
    rgba(255, 215, 0, 0.05) 80%, 
    rgba(255, 215, 0, 0) 100%);
  background-size: 200% 200%;
  animation: shimmer 3s infinite linear;
  pointer-events: none;
  z-index: 0;
  border-radius: 18px;
}

@keyframes shimmer {
  0% { background-position: 0% 0%; }
  100% { background-position: 200% 200%; }
}

.score-table thead {
  background: linear-gradient(135deg, #ffd700, #ffbf00, #ffd700);
  position: relative;
}

.score-table thead tr:first-child th:first-child {
  border-top-left-radius: 16px;
}

.score-table thead tr:first-child th:last-child {
  border-top-right-radius: 16px;
}

.score-table tbody tr:last-child td:first-child {
  border-bottom-left-radius: 16px;
}

.score-table tbody tr:last-child td:last-child {
  border-bottom-right-radius: 16px;
}

.score-table thead:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(to right, rgba(255, 215, 0, 0.2), rgba(255, 215, 0, 1), rgba(255, 215, 0, 0.2));
}

.score-table thead th {
  padding: 16px 10px;
  font-weight: bold;
  color: #6d4c00;
  text-shadow: 0px 1px 2px rgba(255, 255, 255, 0.8);
  position: relative;
  overflow: hidden;
  letter-spacing: 1px;
}

.score-table thead th:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 215, 0, 0.5);
}

.score-table tbody tr {
  transition: all 0.3s ease;
}

.score-table tbody tr:nth-child(even) {
  background-color: rgba(255, 248, 225, 0.5);
}

.score-table tbody tr:hover {
  background-color: rgba(255, 223, 128, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(218, 165, 32, 0.15);
}

.cell {
  width: 25%;
  text-align: center;
  border-bottom: 1px solid rgba(218, 165, 32, 0.2);
  padding: 14px 10px;
  white-space: nowrap;
  position: relative;
  z-index: 2;
}

.green {
  color: #1e7e45;
  font-weight: 600;
  text-shadow: 0 0 1px rgba(46, 139, 87, 0.2);
}

.red {
  color: #c82333;
  font-weight: 600;
  text-shadow: 0 0 1px rgba(220, 53, 69, 0.2);
}

strong {
  color: #6d4c00;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* 全局链接样式修改为仅适用于表格内的链接 */
.score-table a, .reward-table a {
  color: #4472ab;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.score-table a:hover, .reward-table a:hover {
  color: #2b5889;
  text-decoration: none;
}

.score-table a:after, .reward-table a:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: #2b5889;
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

.score-table a:hover:after, .reward-table a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/* 删除全局a选择器 */

/* 第二个表格特殊样式 - 极致平滑渐变效果 */
.reward-table {
  max-width: 500px;
  width: 100%;
  position: relative;
  background: linear-gradient(to bottom, 
    rgba(255, 250, 240, 0.7) 0%,
    rgba(255, 249, 235, 0.7) 5%,
    rgba(255, 247, 230, 0.7) 10%,
    rgba(255, 245, 225, 0.7) 15%,
    rgba(255, 243, 220, 0.7) 20%,
    rgba(255, 241, 215, 0.7) 25%,
    rgba(255, 238, 205, 0.7) 30%, 
    rgba(255, 235, 195, 0.7) 35%,
    rgba(255, 232, 185, 0.7) 40%,
    rgba(255, 229, 175, 0.7) 45%, 
    rgba(255, 225, 165, 0.7) 50%, 
    rgba(255, 222, 155, 0.7) 55%,
    rgba(255, 219, 145, 0.7) 60%,
    rgba(255, 215, 135, 0.7) 65%,
    rgba(255, 212, 125, 0.7) 70%, 
    rgba(255, 209, 115, 0.7) 75%,
    rgba(255, 206, 105, 0.7) 80%,
    rgba(255, 203, 95, 0.7) 85%,
    rgba(255, 201, 90, 0.7) 90%,
    rgba(255, 198, 85, 0.7) 95%,
    rgba(255, 195, 80, 0.7) 100%);
  /* overflow: visible; */
}

.reward-table:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, 
    rgba(255, 235, 195, 0.2) 0%, 
    rgba(255, 235, 195, 0.05) 100%);
  pointer-events: none;
  z-index: 1;
  border-radius: 0 0 16px 16px;
  backdrop-filter: blur(0px);
}

.reward-table tr td,
.reward-table tr th {
  border: none !important;
  border-bottom: none !important;
  outline: none !important;
  box-shadow: none !important;
}

.reward-table tr {
  position: relative;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  z-index: 2;
  margin: 0 !important;
  padding: 0 !important;
  transition: transform 0.3s ease, background 0.3s ease;
  line-height: 1.5;
  height: 48px;
}

.reward-table tr .cell:first-child {
  position: relative;
  overflow: visible;
}

.reward-table tr .cell:first-child:before {
  display: inline-block;
  margin-right: 5px;
  color: transparent;
  background: linear-gradient(to bottom, #ffd700, #daa520);
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 0 0 3px rgba(255, 165, 0, 0.3);
  animation: twinkle 1.5s infinite alternate;
  opacity: 0.9;
  position: relative;
  z-index: 3;
}

.reward-table tr:nth-child(1) .cell:first-child:before { font-size: 100%; filter: brightness(1.05); }
.reward-table tr:nth-child(2) .cell:first-child:before { font-size: 102%; filter: brightness(1.04); }
.reward-table tr:nth-child(3) .cell:first-child:before { font-size: 104%; filter: brightness(1.03); }
.reward-table tr:nth-child(4) .cell:first-child:before { font-size: 106%; filter: brightness(1.02); }
.reward-table tr:nth-child(5) .cell:first-child:before { font-size: 108%; filter: brightness(1.01); }
.reward-table tr:nth-child(6) .cell:first-child:before { font-size: 110%; filter: brightness(1); }
.reward-table tr:nth-child(7) .cell:first-child:before { font-size: 112%; filter: brightness(0.99); }
.reward-table tr:nth-child(8) .cell:first-child:before { font-size: 114%; filter: brightness(0.98); }
.reward-table tr:nth-child(9) .cell:first-child:before { font-size: 116%; filter: brightness(0.97); }
.reward-table tr:nth-child(10) .cell:first-child:before { font-size: 118%; filter: brightness(0.96); }

@keyframes twinkle {
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(1.1); opacity: 1; }
}

.reward-table tr:hover {
  background: radial-gradient(circle at center, rgba(255, 215, 0, 0.25) 0%, rgba(255, 215, 0, 0.1) 50%, rgba(255, 215, 0, 0) 100%) !important;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(218, 165, 32, 0.1) !important;
  position: relative;
  z-index: 4;
}

/* 添加时间文本样式 - 缩小日期字号 */
.reward-table tr td:nth-child(2) a {
  font-size: 0.80em;
  letter-spacing: -0.2px;
  color: #5a7ca8;
}
</style>

## 目标与成绩

<table class="score-table">
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
      <td class="cell"><span class="green">语文</span></td>
      <td class="cell"><span class="green">85</span></td>
      <td class="cell"><span class="green">93</span></td>
      <td class="cell"><span class="green">165</span></td>
    </tr>
    <tr>
      <td class="cell"><span class="green">数学</span></td>
      <td class="cell"><span class="green">90</span></td>
      <td class="cell"><span class="green">100</span></td>
      <td class="cell"><span class="green">190</span></td>
    </tr>
    <tr>
      <td class="cell"><span class="green">英语</span></td>
      <td class="cell"><span class="green">60</span></td>
      <td class="cell"><span class="green">88</span></td>
      <td class="cell"><span class="green">340</span></td>
    </tr>
    <tr>
      <td class="cell"><span class="red">美术</span></td>
      <td class="cell"><span class="red">85</span></td>
      <td class="cell"><span class="red">80</span></td>
      <td class="cell"><span class="red">-50</span></td>
    </tr>
    <tr>
      <td class="cell"><span class="green">舞蹈</span></td>
      <td class="cell"><span class="green">90</span></td>
      <td class="cell"><span class="green">94</span></td>
      <td class="cell"><span class="green">130</span></td>
    </tr>
    <tr>
      <td class="cell"><span class="green">钢琴</span></td>
      <td class="cell"><span class="green">90</span></td>
      <td class="cell"><span class="green">91</span></td>
      <td class="cell"><span class="green">100</span></td>
    </tr>
    <tr>
      <td class="cell"><span class="green">声乐</span></td>
      <td class="cell"><span class="green">90</span></td>
      <td class="cell"><span class="green">93</span></td>
      <td class="cell"><span class="green">120</span></td>
    </tr>
    <tr>
      <td class="cell"><span class="red">政治</span></td>
      <td class="cell"><span class="red">90</span></td>
      <td class="cell"><span class="red">88</span></td>
      <td class="cell"><span class="red">-20</span></td>
    </tr>
    <tr>
      <td class="cell"><span class="green">保育</span></td>
      <td class="cell"><span class="green">90</span></td>
      <td class="cell"><span class="green">91.5</span></td>
      <td class="cell"><span class="green">105</span></td>
    </tr>
    <tr>
      <td class="cell"><span class="green">教育</span></td>
      <td class="cell"><span class="green">90</span></td>
      <td class="cell"><span class="green">100</span></td>
      <td class="cell"><span class="green">190</span></td>
    </tr>
    <tr>
      <td class="cell"><strong>总计</strong></td>
      <td class="cell"></td>
      <td class="cell"></td>
      <td class="cell"><strong>1270</strong></td>
    </tr>
  </tbody>
</table>

> 奖惩计算公式
>
> - 成绩达标或超标：奖励 = (成绩 - 目标) × 10 + 目标
> - 成绩未达标：惩罚 = (目标 - 成绩) × 10
>
> *注：奖励金额单位为元*

## 奖惩执行情况

总计奖励 1270 元，分 10 期发放，每期奖励 127 元。奖励将与双完美计划挂钩，每完成一次双完美计划即可获得一期奖励，激励学习持续进步。

<table class="score-table">
  <thead>
    <tr>
      <th class="cell">期数</th>
      <th class="cell">双完美计划</th>
      <th class="cell">奖励金额</th>
    </tr>
  </thead>
  <tbody class="reward-table">
    <tr>
      <td class="cell">1</td>
      <td class="cell"><a href="../../../study_record/ls/20250310_20250316/">2025/03/10 ~ 2025/03/16</a></td>
      <td class="cell">127</td>
    </tr>
    <tr>
      <td class="cell">2</td>
      <td class="cell"><a href="../../../study_record/ls/20250310_20250316/">2025/03/10 ~ 2025/03/16</a></td>
      <td class="cell">127</td>
    </tr>
    <tr>
      <td class="cell">3</td>
      <td class="cell"><a href="../../../study_record/ls/20250310_20250316/">2025/03/10 ~ 2025/03/16</a></td>
      <td class="cell">127</td>
    </tr>
    <tr>
      <td class="cell">4</td>
      <td class="cell"><a href="../../../study_record/ls/20250310_20250316/">2025/03/10 ~ 2025/03/16</a></td>
      <td class="cell">127</td>
    </tr>
    <tr>
      <td class="cell">5</td>
      <td class="cell"><a href="../../../study_record/ls/20250310_20250316/">2025/03/10 ~ 2025/03/16</a></td>
      <td class="cell">127</td>
    </tr>
    <tr>
      <td class="cell">6</td>
      <td class="cell"><a href="../../../study_record/ls/20250310_20250316/">2025/03/10 ~ 2025/03/16</a></td>
      <td class="cell">127</td>
    </tr>
    <tr>
      <td class="cell">7</td>
      <td class="cell"><a href="../../../study_record/ls/20250310_20250316/">2025/03/10 ~ 2025/03/16</a></td>
      <td class="cell">127</td>
    </tr>
    <tr>
      <td class="cell">8</td>
      <td class="cell"><a href="../../../study_record/ls/20250310_20250316/">2025/03/10 ~ 2025/03/16</a></td>
      <td class="cell">127</td>
    </tr>
    <tr>
      <td class="cell">9</td>
      <td class="cell"><a href="../../../study_record/ls/20250310_20250316/">2025/03/10 ~ 2025/03/16</a></td>
      <td class="cell">127</td>
    </tr>
    <tr>
      <td class="cell">10</td>
      <td class="cell"><a href="../../../study_record/ls/20250310_20250316/">2025/03/10 ~ 2025/03/16</a></td>
      <td class="cell">127</td>
    </tr>
  </tbody>
</table>
