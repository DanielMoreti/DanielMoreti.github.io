document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.getElementById("skills");
    const bars = skillsSection.querySelectorAll(".progress-bar");

    function animateBars() {
        bars.forEach(bar => {
            const value = bar.getAttribute("data-value");
            bar.style.width = value + "%";
        });
    }

    function resetBars() {
        bars.forEach(bar => bar.style.width = "0%");
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateBars();   // quando entra
            } else {
                resetBars();     // quando sai
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
});

document.addEventListener("DOMContentLoaded", function () {
    const imagens = document.querySelectorAll(".img-animada");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.5 }); // 50% visível

    imagens.forEach(img => observer.observe(img));
});

document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".flow ul li");
    let index = 0;

    const animateStep = () => {
        if (index < steps.length) {
            const step = steps[index];
            step.classList.add("show");

            // Adiciona check após 0.6s
            setTimeout(() => {
                step.classList.add("complete");
            }, 600);

            index++;
            setTimeout(animateStep, 800); // anima próxima etapa
        }
    };

    // Observa quando a seção estiver visível
    const flowSection = document.querySelector(".flow");
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            animateStep();
            observer.disconnect(); // anima só uma vez
        }
    }, { threshold: 0.5 });

    observer.observe(flowSection);
});

document.addEventListener("DOMContentLoaded", () => {
    // --- CARROSSEL ---
    const slider = document.querySelector('.cards-carousel');
    if (slider) { // garante que o elemento existe
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // velocidade do arraste
            slider.scrollLeft = scrollLeft - walk;
        });
    }
});