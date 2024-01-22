import express from "express"
const app = express();
import historicoInflacao from "../dados/dados.js";



app.get('/ipca', (req, res) => {

    let resultado = historicoInflacao;
    res.json(resultado)

})

app.get('/buscaAno', (req, res) => {
    let ano = parseInt(req.query.ano);
    let colecaoFiltrada = historicoInflacao.filter((e) => e.ano === ano)
    res.json(colecaoFiltrada)

})

app.get('/buscandoId/:idIpca', (req, res) => {
    let idIpca = parseInt(req.params.idIpca);
    let id = '';
    let mensagemErro = '';

    if (!(isNaN(idIpca))) {
        id = historicoInflacao.find(e => e.id === idIpca)

        if (!(id)) {
            mensagemErro = 'Id não encontrado!'
        }

    } else {
        mensagemErro = 'Requisição inválida!'
    }

    if (id) {
        res.json(id)
    } else {
        res.status(404).json(mensagemErro)
    }
})

app.get('/calculaIpca', (req, res) => {
    let valor = parseInt(req.query.valor);
    let mesInicialQuery = parseInt(req.query.mesInicial);
    let anoInicialQuery = parseInt(req.query.anoInicial);
    let mesFinalQuery = parseInt(req.query.mesFinal);
    let anoFinalQuery = parseInt(req.query.anoFinal);

    
})

app.listen(6969, () => {
    let horario = new Date().getHours();
    console.log(`Servidor iniciado ás ${horario}`);
})