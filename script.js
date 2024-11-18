// Função para abrir a modal
function abrirModal(modalId) {
    // Fecha todas as modais antes de abrir a nova
    var modais = document.querySelectorAll('.caixa-texto');
    modais.forEach(function(modal) {
        modal.classList.remove('ativo');
    });

    // Abre a modal específica
    var modal = document.getElementById(modalId);
    modal.classList.add('ativo');
}

// Função para fechar a modal
function fecharModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.remove('ativo');
}
