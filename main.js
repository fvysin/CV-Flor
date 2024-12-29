// Lógica del Carrusel
let currentIndex = 0;  // Índice de la imagen actual
const proyectos = document.querySelectorAll('.div-proyecto');  // Selecciona todas las imágenes del carrusel
const totalProyectos = proyectos.length;  // Total de proyectos

// Botones de navegación
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Función para mostrar el proyecto actual
function showProject(index) {
    // Asegura que el índice esté dentro del rango de proyectos
    if (index >= totalProyectos) currentIndex = 0;
    if (index < 0) currentIndex = totalProyectos - 1;

    // Despliega el proyecto actual y oculta los demás
    proyectos.forEach((project, idx) => {
        project.style.display = (idx === currentIndex) ? 'block' : 'none';
    });
}

// Muestra el primer proyecto al cargar
showProject(currentIndex);

// Función para mover al siguiente proyecto
nextBtn.addEventListener('click', () => {
    currentIndex++;
    showProject(currentIndex);
});

// Función para mover al proyecto anterior
prevBtn.addEventListener('click', () => {
    currentIndex--;
    showProject(currentIndex);
});
