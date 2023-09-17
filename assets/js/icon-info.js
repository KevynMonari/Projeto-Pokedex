function abrirModal(carregarModal){
    // console.log('Funcionando');

    let modal = document.getElementById(carregarModal);

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function fecharModal(fecharModal){
    // console.log('Fechando');

    let modal = document.getElementById(fecharModal);

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}