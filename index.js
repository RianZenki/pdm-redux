// Essa função é criadora de um tipo de ação
const criarContrato = (nome, taxa) => {
  // Esse JSOn que ela devolve é uma ação
  return {
    type: 'CRIAR_CONTRATO',
    dados: {
      nome,
      taxa,
    },
  };
};

const cancelarContrato = (nome) => {
  return {
    type: 'CANCELAR_CONTRATO',
    dados: {
      nome,
    },
  };
};

const solicitarCachBack = (nome, valor) => {
  return {
    type: 'SOLICITAR_CASHBACK',
    dados: {
      nome,
      valor,
    },
  };
};

const historicoDePedidosDeCachback = (
  historicoDePedidosDeCashbackAtual = [],
  acao
) => {
  if (acao.type === 'SOLICITAR_CASHBACK') {
    return [...historicoDePedidosDeCashbackAtual, acao.dados];
  }
  return historicoDePedidosDeCashbackAtual;
};

const caixa = (dinheiroEmCaixa = 0, acao) => {
  if (acao.type === 'SOLICITAR_CASHBACK') {
    dinheiroEmCaixa -= acao.dados.valor
  }
  else if (acao.type === "CRIAR_CONTRADO") {
    dinheiroEmCaixa += acao.dados.taxa
  }

  return dinheiroEmCaixa
}

const contratos = (listaDeContratosAtual = [], acao) => {
  if (acao.type === "CRAIR_CONTRATO")
    return [...listaDeContratosAtual, acao.dados]
  if (acao.type === "CANCELAR_CONTRATO")
    return listaDeContratosAtual.filter(c => c.nome !== acao.dados.nome)
  
  return listaDeContratosAtual
}