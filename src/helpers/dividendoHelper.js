import format from "date-fns/format";

const HISTORICO = "rv/historicoDividendos";

export const salvarDividendo = (ticker, valor, data) => {
  let historicoDividendos = sessionStorage.getItem(HISTORICO) || [];
  historicoDividendos = JSON.parse(historicoDividendos);

  const dividendo = { ticker, valor, data };

  const novoHistoricoDividendos = [...historicoDividendos, dividendo];

  sessionStorage.setItem(HISTORICO, JSON.stringify(novoHistoricoDividendos));
};
