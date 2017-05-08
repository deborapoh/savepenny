var opcoes = document.getElementsByName('transacao');
var valor = document.getElementById('valor');
function mudarCor(opcoes) {
    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            if (opcoes[i].value == 'ganhei') {
                console.log('Ganhei selecionado');
                valor.style.color="#228B22";
            } else {
                console.log('Gastei selecionado');
                
                valor.style.color="red";
            }
        }
    }
}
