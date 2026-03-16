// animationtitle.js
export function initTypeEffect() {
    const element = document.getElementById("typing"); // Contenedor principal
    const textElement = document.getElementById("text");
    const cursor = document.querySelector(".cursor");

    if (!element || !textElement || !cursor) {
        console.warn("Elementos de typing no encontrados");
        return;
    }

    const text = `Hola, Soy Cristian Motta un nuevo desarrollador de software web que está comenzando a adquirir conocimientos en el área del desarrollo. Me encanta programar y aprender constantemente,
    ya que considero que cada línea de código es una oportunidad para crecer. 

    Creo firmemente que la inteligencia artificial es una de las innovaciones más sorprendentes que hemos creado como desarrolladores, y representa un futuro lleno de posibilidades.

    Disfruto crear cosas nuevas, experimentar con ideas y expandir mis conocimientos en el mundo del software. El desarrollo sigue siendo algo que me motiva, me inspira y me mantiene profundamente apasionado.

    Mi objetivo es seguir mejorando día a día, aportar soluciones útiles y convertirme en un profesional capaz de transformar ideas en realidades tecnológicas.`;

    let index = 0;
    const speed = 10; // Velocidad en ms (ajústala)

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            cursor.style.display = 'none';
        }
    }

    // Usar Intersection Observer para empezar cuando sea visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                type();
                observer.disconnect(); // Dejar de observar
            }
        });
    }, { threshold: 0.5 }); // 50% visible

    observer.observe(element);
}

