function adicionarLinha() {
    const tabela = document.getElementById("tabelaDinamica").getElementsByTagName("tbody")[0];
    const novaLinha = tabela.insertRow();

    // Criando células editáveis
    const celulaTitulo = novaLinha.insertCell(0);
    const celulaAno = novaLinha.insertCell(1);
    const celulaBilheteria = novaLinha.insertCell(2);
    const celulaDiretor = novaLinha.insertCell(3);
    const celulaPremiacoes = novaLinha.insertCell(4);
    const celulaAcoes = novaLinha.insertCell(5);

    celulaTitulo.contentEditable = "true";
    celulaAno.contentEditable = "true";
    celulaBilheteria.contentEditable = "true";
    celulaDiretor.contentEditable = "true";
    celulaPremiacoes.contentEditable = "true";

    // Botão de exclusão na última célula
    celulaAcoes.innerHTML = `<button onclick="removerLinha(this)">Excluir</button>`;
}

// Função para remover uma linha
function removerLinha(botao) {
    const linha = botao.parentElement.parentElement;
    linha.remove();
}

// Função para exibir os dados da tabela no console
function exibirDados() {
    const tabela = document.getElementById("tabelaDinamica");
    const linhas = tabela.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    let dados = [];
    for (let i = 0; i < linhas.length; i++) {
        const titulo = linhas[i].cells[0].innerText;
        const ano = linhas[i].cells[1].innerText;
        const bilheteria = linhas[i].cells[2].innerText;
        const diretor = linhas[i].cells[3].innerText;
        const premiacoes = linhas[i].cells[4].innerText;

        dados.push({ Título: titulo, Ano: ano, Bilheteria: bilheteria, Diretor: diretor, Premiações: premiacoes });
    }

    console.log("Dados da Tabela:", dados);
}