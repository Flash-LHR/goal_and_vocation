document.addEventListener('DOMContentLoaded', function () {
    // 创建透视容器
    const perspectiveContainer = document.createElement('div');
    perspectiveContainer.className = 'perspective-container';
    document.body.appendChild(perspectiveContainer);

    // 创建金色遮罩
    const overlay = document.createElement('div');
    overlay.className = 'golden-overlay';
    document.body.appendChild(overlay);

    // 创建金色扩散圆
    const ripple = document.createElement('div');
    ripple.className = 'gold-ripple';
    document.body.appendChild(ripple);

    // 创建能量环容器
    const energyRings = document.createElement('div');
    energyRings.className = 'energy-rings';
    document.body.appendChild(energyRings);

    // 创建光晕效果
    const glow = document.createElement('div');
    glow.className = 'gold-glow';
    document.body.appendChild(glow);

    // 创建几何体容器
    const geometricContainer = document.createElement('div');
    geometricContainer.className = 'geometric-container';
    document.body.appendChild(geometricContainer);

    // 创建粒子容器
    const particles = document.createElement('div');
    particles.className = 'gold-particles';
    document.body.appendChild(particles);

    // 创建光线容器
    const lightRays = document.createElement('div');
    lightRays.className = 'light-rays';
    document.body.appendChild(lightRays);

    // 创建闪光波纹
    const shimmerWaves = document.createElement('div');
    shimmerWaves.className = 'shimmer-waves';
    document.body.appendChild(shimmerWaves);

    // 创建能量环
    function createEnergyRings(x, y) {
        energyRings.innerHTML = '';

        const colors = [
            'linear-gradient(to right, #ffd700, #ffec99, #ffd700)',
            'linear-gradient(to right, #ffeb3b, #ffc107, #ffeb3b)',
            'linear-gradient(to right, #ffc107, #ff9800, #ffc107)'
        ];

        for (let i = 0; i < 5; i++) {
            const ring = document.createElement('div');
            ring.className = 'energy-ring';
            ring.style.width = '100px';
            ring.style.height = '100px';
            ring.style.left = (x - 50) + 'px';
            ring.style.top = (y - 50) + 'px';
            ring.style.borderImage = colors[i % colors.length];
            ring.style.animation = `energyRing ${1 + i * 0.2}s cubic-bezier(0.19, 1, 0.22, 1) ${i * 0.1}s forwards`;

            energyRings.appendChild(ring);
        }
    }

    // 创建3D几何体
    function createGeometrics(x, y) {
        geometricContainer.innerHTML = '';

        const shapes = ['polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)', // 五边形
            'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // 菱形
            'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' // 六边形
        ];

        for (let i = 0; i < 8; i++) {
            const geo = document.createElement('div');
            geo.className = 'geometric';

            // 随机位置
            const angle = Math.random() * Math.PI * 2;
            const distance = 50 + Math.random() * 100;
            const posX = x + Math.cos(angle) * distance;
            const posY = y + Math.sin(angle) * distance;

            geo.style.left = (posX - 20) + 'px';
            geo.style.top = (posY - 20) + 'px';

            // 随机形状
            geo.style.clipPath = shapes[Math.floor(Math.random() * shapes.length)];

            // 随机大小
            const size = 30 + Math.random() * 40;
            geo.style.width = size + 'px';
            geo.style.height = size + 'px';

            // 3D动画
            geo.style.animation = `float3D ${2 + Math.random() * 2}s ease-in-out infinite, pulse3D ${1 + Math.random()}s ease-in-out infinite`;

            geometricContainer.appendChild(geo);
        }
    }

    // 创建粒子
    function createParticles(x, y) {
        particles.innerHTML = '';

        for (let i = 0; i < 60; i++) {
            const particle = document.createElement('div');
            particle.className = 'gold-particle';

            // 随机位置
            const angle = Math.random() * Math.PI * 2;
            const distance = 20 + Math.random() * 100;
            const posX = x + Math.cos(angle) * distance;
            const posY = y + Math.sin(angle) * distance;

            // 设置CSS变量用于动画
            particle.style.setProperty('--tx', (Math.random() * 200 - 100) + 'px');
            particle.style.setProperty('--ty', (Math.random() * 200 - 100) + 'px');

            particle.style.left = posX + 'px';
            particle.style.top = posY + 'px';

            // 随机大小
            const size = 3 + Math.random() * 15;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';

            // 随机颜色
            const hue = 45 + Math.random() * 20; // 金色范围
            particle.style.backgroundColor = `hsl(${hue}, 100%, ${70 + Math.random() * 20}%)`;
            particle.style.boxShadow = `0 0 ${10 + Math.random() * 20}px ${3 + Math.random() * 5}px hsla(${hue}, 100%, 70%, 0.8)`;

            // 随机延迟
            const delay = Math.random() * 0.5;
            particle.style.animation = `starBurst ${0.8 + Math.random() * 0.7}s cubic-bezier(0.19, 1, 0.22, 1) ${delay}s forwards`;

            particles.appendChild(particle);
        }
    }

    // 创建光线射线
    function createLightRays(x, y) {
        lightRays.innerHTML = '';
        lightRays.style.left = x + 'px';
        lightRays.style.top = y + 'px';

        for (let i = 0; i < 24; i++) {
            const ray = document.createElement('div');
            ray.className = 'light-ray';

            // 设置角度变量用于动画
            ray.style.setProperty('--angle', (i * 15) + 'deg');

            // 起始旋转
            ray.style.transform = `rotate(${i * 15}deg)`;

            // 随机宽度
            ray.style.width = (1 + Math.random() * 3) + 'px';

            // 随机透明度
            ray.style.opacity = 0.5 + Math.random() * 0.5;

            // 动画
            ray.style.animation = `lightRay ${0.8 + Math.random() * 0.6}s linear ${Math.random() * 0.3}s forwards`;

            lightRays.appendChild(ray);
        }
    }

    // 为所有日期链接添加点击事件
    const links = document.querySelectorAll('.reward-table tr td:nth-child(2) a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // 阻止默认跳转

            const href = this.getAttribute('href'); // 保存目标链接
            const rect = this.getBoundingClientRect(); // 获取链接位置

            // 获取点击中心点
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

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

            // 创建能量环
            createEnergyRings(centerX, centerY);
            energyRings.style.opacity = '1';

            // 创建3D几何体
            createGeometrics(centerX, centerY);
            geometricContainer.style.opacity = '1';

            // 创建粒子效果
            createParticles(centerX, centerY);
            particles.style.opacity = '1';

            // 创建光线射线
            createLightRays(centerX, centerY);
            lightRays.style.opacity = '1';

            // 设置闪光波纹
            shimmerWaves.style.opacity = '1';
            shimmerWaves.style.animation = 'shimmerWave 1.2s ease-in-out infinite';

            // 应用动画
            ripple.style.animation = 'goldenExpand 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.97) forwards';

            // 动画序列
            setTimeout(() => {
                // 创建页面过渡效果
                document.body.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
                document.body.style.transformOrigin = `${centerX}px ${centerY}px`;
                document.body.style.transform = 'scale(1.1) rotate3d(1, 2, 0, 5deg)';

                overlay.style.opacity = '1';

                setTimeout(() => {
                    document.body.style.transform = 'scale(0.9) rotate3d(1, 2, 0, -5deg)';

                    setTimeout(() => {
                        window.location.href = href; // 跳转到目标页面
                    }, 400);
                }, 600);
            }, 400);
        });
    });
}); 
