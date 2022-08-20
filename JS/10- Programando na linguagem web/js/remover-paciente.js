const removerPacientes = document.querySelectorAll('.paciente');
const table = document.querySelector('table');

table.addEventListener('click', (evento) => {
    evento.target.parentNode.classList.add('fadeOut');
    setTimeout(() => {
        evento.target.parentNode.remove();
    },500);
});
