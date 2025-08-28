"use client";

import { useState } from "react";

const invoices = [
  {
    id: 1,
    mes: "Janeiro",
    valor: "R$ 104,90",
    vencimento: "15/01/2025",
    status: "Pago",
    codigo: "34191.79001 01043.510047 91020.150008 9 12340000010490",
  },
  {
    id: 2,
    mes: "Fevereiro",
    valor: "R$ 104,90",
    vencimento: "15/02/2025",
    status: "Em aberto",
    codigo: "34191.79001 01043.510047 91020.150008 9 12340000010490",
  },
];

export default function Page() {
  const [mesSelecionado, setMesSelecionado] = useState(invoices[0].mes);

  const fatura = invoices.find((f) => f.mes === mesSelecionado);

  const copiarCodigo = async (codigo) => {
    await navigator.clipboard.writeText(codigo);
    alert("Código de barras copiado!");
  };

  return (
    <div className="min-h-screen p-5 text-sm flex flex-col gap-5 text-white/90">
      <h1 className="text-lg font-bold">Minhas Faturas</h1>

      {/* Filtro por mês */}
      <select
        value={mesSelecionado}
        onChange={(e) => setMesSelecionado(e.target.value)}
        className="bg-black border border-gray-500 rounded-lg p-2"
      >
        {invoices.map((f) => (
          <option key={f.id} value={f.mes}>
            {f.mes}
          </option>
        ))}
      </select>

      {/* Resumo da fatura */}
      {fatura && (
        <div className="border border-gray-500 rounded-lg p-4 flex flex-col gap-3 hover:bg-white/5">
          <div className="flex items-center justify-between">
            <p className="font-bold">{fatura.valor}</p>
            <p
              className={
                fatura.status === "Pago"
                  ? "text-green-400"
                  : "text-orange-400"
              }
            >
              {fatura.status}
            </p>
          </div>
          <p>Vencimento: {fatura.vencimento}</p>

          {/* Ações condicionais */}
          {fatura.status === "Em aberto" && (
            <div className="flex gap-3 mt-3">
              <button
                onClick={() => copiarCodigo(fatura.codigo)}
                className="flex-1 rounded-full bg-gray-600 py-1 px-3 hover:bg-gray-500"
              >
                Copiar código
              </button>
              <button className="flex-1 rounded-full bg-orange-500 py-1 px-3 hover:bg-orange-400">
                Segunda via
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
