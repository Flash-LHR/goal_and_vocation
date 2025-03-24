document.addEventListener('DOMContentLoaded', function () {
    // 预先创建容器元素，避免点击时创建
    const perspectiveContainer = document.createElement('div');
    perspectiveContainer.className = 'perspective-container';
    perspectiveContainer.style.opacity = '0';
    document.body.appendChild(perspectiveContainer);

    const overlay = document.createElement('div');
    overlay.className = 'golden-overlay';
    overlay.style.opacity = '0';
    document.body.appendChild(overlay);

    const ripple = document.createElement('div');
    ripple.className = 'gold-ripple';
    ripple.style.opacity = '0';
    document.body.appendChild(ripple);

    // 创建GIF加载动画容器
    const gifContainer = document.createElement('div');
    gifContainer.className = 'gif-container';
    gifContainer.style.opacity = '0';
    gifContainer.style.position = 'fixed';
    gifContainer.style.zIndex = '1000';
    gifContainer.style.pointerEvents = 'none';
    gifContainer.style.transition = 'opacity 0.3s ease';
    document.body.appendChild(gifContainer);

    // 创建GIF元素
    const gifElement = document.createElement('img');
    gifElement.src = '/goal_and_vocation/docs/study_goal/ls/grade11_s1/assets/1.gif';
    gifElement.style.width = '120px';
    gifElement.style.height = '120px';
    gifElement.style.position = 'absolute';
    gifElement.style.transform = 'translate(-50%, -50%)';
    gifContainer.appendChild(gifElement);

    const energyRings = document.createElement('div');
    energyRings.className = 'energy-rings';
    energyRings.style.opacity = '0';
    document.body.appendChild(energyRings);

    const glow = document.createElement('div');
    glow.className = 'gold-glow';
    glow.style.opacity = '0';
    document.body.appendChild(glow);

    const geometricContainer = document.createElement('div');
    geometricContainer.className = 'geometric-container';
    geometricContainer.style.opacity = '0';
    document.body.appendChild(geometricContainer);

    const particles = document.createElement('div');
    particles.className = 'gold-particles';
    particles.style.opacity = '0';
    document.body.appendChild(particles);

    const lightRays = document.createElement('div');
    lightRays.className = 'light-rays';
    lightRays.style.opacity = '0';
    document.body.appendChild(lightRays);

    const shimmerWaves = document.createElement('div');
    shimmerWaves.className = 'shimmer-waves';
    shimmerWaves.style.opacity = '0';
    document.body.appendChild(shimmerWaves);

    // 优化1: 减少创建的元素数量
    function createEnergyRings(x, y) {
        energyRings.innerHTML = '';

        // 减少环数从5个到3个
        const colors = [
            'linear-gradient(to right, #ffd700, #ffec99, #ffd700)',
            'linear-gradient(to right, #ffeb3b, #ffc107, #ffeb3b)',
            'linear-gradient(to right, #ffc107, #ff9800, #ffc107)'
        ];

        // 只创建3个环而不是5个
        for (let i = 0; i < 3; i++) {
            const ring = document.createElement('div');
            ring.className = 'energy-ring';
            ring.style.width = '100px';
            ring.style.height = '100px';
            ring.style.left = (x - 50) + 'px';
            ring.style.top = (y - 50) + 'px';
            ring.style.borderImage = colors[i % colors.length];
            // 添加硬件加速
            ring.style.transform = 'translateZ(0)';
            ring.style.animation = `energyRing ${1 + i * 0.2}s cubic-bezier(0.19, 1, 0.22, 1) ${i * 0.1}s forwards`;

            energyRings.appendChild(ring);
        }
    }

    // 优化2: 减少几何体数量和复杂度
    function createGeometrics(x, y) {
        geometricContainer.innerHTML = '';

        const shapes = ['polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)']; // 只使用一种简单形状-菱形

        // 从8个减少到5个
        for (let i = 0; i < 5; i++) {
            const geo = document.createElement('div');
            geo.className = 'geometric';

            // 添加硬件加速
            geo.style.transform = 'translateZ(0)';

            // 随机位置
            const angle = Math.random() * Math.PI * 2;
            const distance = 50 + Math.random() * 80; // 减小范围
            const posX = x + Math.cos(angle) * distance;
            const posY = y + Math.sin(angle) * distance;

            geo.style.left = (posX - 20) + 'px';
            geo.style.top = (posY - 20) + 'px';
            geo.style.clipPath = shapes[0]; // 固定使用同一形状减少计算

            // 减小尺寸
            const size = 20 + Math.random() * 30;
            geo.style.width = size + 'px';
            geo.style.height = size + 'px';

            // 简化动画
            geo.style.animation = `float3D ${2 + Math.random() * 1}s ease-in-out infinite`;

            geometricContainer.appendChild(geo);
        }
    }

    // 优化3: 减少粒子数量和简化粒子效果
    function createParticles(x, y) {
        particles.innerHTML = '';

        // 粒子数量从60减少到30
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'gold-particle';

            // 添加硬件加速
            particle.style.transform = 'translateZ(0)';

            // 随机位置
            const angle = Math.random() * Math.PI * 2;
            const distance = 20 + Math.random() * 80; // 减小范围
            const posX = x + Math.cos(angle) * distance;
            const posY = y + Math.sin(angle) * distance;

            // 简化运动曲线
            particle.style.setProperty('--tx', (Math.random() * 150 - 75) + 'px');
            particle.style.setProperty('--ty', (Math.random() * 150 - 75) + 'px');

            particle.style.left = posX + 'px';
            particle.style.top = posY + 'px';

            // 减小尺寸范围
            const size = 2 + Math.random() * 10;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';

            // 简化颜色
            const hue = 45 + Math.random() * 15;
            particle.style.backgroundColor = `hsl(${hue}, 100%, ${70 + Math.random() * 20}%)`;
            // 减少阴影模糊值
            particle.style.boxShadow = `0 0 ${5 + Math.random() * 10}px ${2 + Math.random() * 3}px hsla(${hue}, 100%, 70%, 0.7)`;

            const delay = Math.random() * 0.3; // 减少最大延迟
            particle.style.animation = `starBurst ${0.6 + Math.random() * 0.4}s cubic-bezier(0.19, 1, 0.22, 1) ${delay}s forwards`;

            particles.appendChild(particle);
        }
    }

    // 优化4: 减少光线数量
    function createLightRays(x, y) {
        lightRays.innerHTML = '';
        lightRays.style.left = x + 'px';
        lightRays.style.top = y + 'px';

        // 从24条减少到12条
        for (let i = 0; i < 12; i++) {
            const ray = document.createElement('div');
            ray.className = 'light-ray';

            // 添加硬件加速
            ray.style.transform = `rotate(${i * 30}deg) translateZ(0)`;
            ray.style.setProperty('--angle', (i * 30) + 'deg');

            // 随机宽度
            ray.style.width = (1 + Math.random() * 2) + 'px';
            ray.style.opacity = 0.5 + Math.random() * 0.4;
            ray.style.animation = `lightRay ${0.6 + Math.random() * 0.4}s linear ${Math.random() * 0.2}s forwards`;

            lightRays.appendChild(ray);
        }
    }

    // 为所有日期链接添加点击事件
    const links = document.querySelectorAll('.reward-table tr td:nth-child(2) a');

    // 添加throttle函数防止快速多次点击
    let isAnimating = false;

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            // 防止多次点击时重复触发动画
            if (isAnimating) {
                e.preventDefault();
                return;
            }

            isAnimating = true;
            e.preventDefault(); // 阻止默认跳转

            const href = this.getAttribute('href'); // 保存目标链接
            const rect = this.getBoundingClientRect(); // 获取链接位置

            // 获取点击中心点
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // 设置GIF位置并显示
            gifContainer.style.left = centerX + 'px';
            gifContainer.style.top = centerY + 'px';
            gifContainer.style.opacity = '1';

            // 首先只显示GIF，延迟其他动画
            setTimeout(() => {
                // 设置3D视角
                perspectiveContainer.style.opacity = '1';

                // 设置金色圆形的起始位置
                ripple.style.top = (centerY - 25) + 'px';
                ripple.style.left = (centerX - 25) + 'px';
                ripple.style.opacity = '1';

                // 设置光晕效果位置
                glow.style.top = (centerY - 30) + 'px';
                glow.style.left = (centerX - 30) + 'px';
                glow.style.opacity = '1';
                glow.style.animation = 'goldenRotate 1.5s linear infinite, pulseGlow 1s ease-in-out infinite';

                // 应用简单的扩散动画
                ripple.style.animation = 'goldenExpand 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.97) forwards';

                // 延迟执行复杂特效
                setTimeout(() => {
                    // 创建能量环
                    createEnergyRings(centerX, centerY);
                    energyRings.style.opacity = '1';

                    // 创建粒子效果
                    createParticles(centerX, centerY);
                    particles.style.opacity = '1';

                    // 进一步延迟最复杂的特效
                    setTimeout(() => {
                        // 创建3D几何体
                        createGeometrics(centerX, centerY);
                        geometricContainer.style.opacity = '1';

                        // 创建光线射线
                        createLightRays(centerX, centerY);
                        lightRays.style.opacity = '1';

                        // 设置闪光波纹
                        shimmerWaves.style.opacity = '1';
                        shimmerWaves.style.animation = 'shimmerWave 1.2s ease-in-out infinite';
                    }, 100);
                }, 200);
            }, 400); // 等待GIF显示一会儿再开始其他动画

            // 动画序列
            setTimeout(() => {
                // 创建页面过渡效果，优化转场动画
                overlay.style.opacity = '1';

                // 添加CSS变换原点和使用translateZ(0)启用硬件加速
                document.body.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
                document.body.style.transformOrigin = `${centerX}px ${centerY}px`;
                document.body.style.transform = 'scale(1.05) translateZ(0)';

                setTimeout(() => {
                    document.body.style.transform = 'scale(0.95) translateZ(0)';

                    // 在页面跳转前500ms开始淡出GIF
                    setTimeout(() => {
                        gifContainer.style.opacity = '0';
                    }, 100);

                    setTimeout(() => {
                        window.location.href = href; // 跳转到目标页面
                        // 重置状态以便下次动画
                        isAnimating = false;
                    }, 300);
                }, 500);
            }, 600);
        });
    });
}); 
