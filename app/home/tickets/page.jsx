"use client";

import { useState } from "react";
import { BadgeQuestionMark, BadgeInfo, BadgeCheck, Plus } from "lucide-react";

const ticketsMock = [
  { id: 1, titulo: "Problema no Tracking", status: "Em aberto", descricao: "GPS não atualiza." },
  { id: 2, titulo: "Erro na câmera", status: "Em andamento", descricao: "Câmera não conecta." },
  { id: 3, titulo: "Dúvida sobre fatura", status: "Finalizado", descricao: "Cliente já recebeu suporte." },
];

export default function Tickets() {
  const [filtro, setFiltro] = useState("Em aberto");
  const [modal, setModal] = useState(null); // "novo", "detalhe"
  const [ticketSelecionado, setTicketSelecionado] = useState(null);

  const tickets = ticketsMock.filter((t) => t.status === filtro);

  return (
    <div className="min-h-screen p-5 text-sm flex flex-col gap-5 text-white/90">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Tickets</h1>
        <button
          onClick={() => setModal("novo")}
          className="flex items-center gap-2 bg-orange-500 px-3 py-1 rounded-full hover:bg-orange-400"
        >
          <Plus size={16} /> Novo Ticket
        </button>
      </div>

      {/* Filtros */}
      <div className="flex gap-3">
        <button
          onClick={() => setFiltro("Em aberto")}
          className={`flex-1 border rounded-lg p-2 flex items-center justify-center gap-2 ${
            filtro === "Em aberto" ? "bg-white/10" : "border-gray-500"
          }`}
        >
          <BadgeQuestionMark size={16} /> Em aberto
        </button>
        <button
          onClick={() => setFiltro("Em andamento")}
          className={`flex-1 border rounded-lg p-2 flex items-center justify-center gap-2 ${
            filtro === "Em andamento" ? "bg-white/10" : "border-gray-500"
          }`}
        >
          <BadgeInfo size={16} /> Em andamento
        </button>
        <button
          onClick={() => setFiltro("Finalizado")}
          className={`flex-1 border rounded-lg p-2 flex items-center justify-center gap-2 ${
            filtro === "Finalizado" ? "bg-white/10" : "border-gray-500"
          }`}
        >
          <BadgeCheck size={16} /> Finalizados
        </button>
      </div>

      {/* Lista de tickets */}
      <div className="flex flex-col gap-3">
        {tickets.map((t) => (
          <div
            key={t.id}
            onClick={() => {
              setTicketSelecionado(t);
              setModal("detalhe");
            }}
            className="border border-gray-500 rounded-lg p-3 hover:bg-white/5 cursor-pointer"
          >
            <p className="font-bold">{t.titulo}</p>
            <p className="text-gray-400 text-xs">{t.status}</p>
          </div>
        ))}
      </div>

      {/* Modal Novo Ticket */}
      {modal === "novo" && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-black border border-gray-600 rounded-lg p-5 w-80">
            <h2 className="font-bold mb-3">Novo Ticket</h2>
            <input
              placeholder="Título"
              className="w-full mb-2 p-2 bg-transparent border border-gray-600 rounded"
            />
            <textarea
              placeholder="Descreva o problema"
              className="w-full mb-2 p-2 bg-transparent border border-gray-600 rounded"
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setModal(null)} className="px-3 py-1 rounded border border-gray-600">
                Cancelar
              </button>
              <button className="px-3 py-1 rounded bg-orange-500">Abrir</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Detalhe Ticket */}
      {modal === "detalhe" && ticketSelecionado && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-black border border-gray-600 rounded-lg p-5 w-80">
            <h2 className="font-bold mb-3">{ticketSelecionado.titulo}</h2>
            <p className="text-sm mb-2">{ticketSelecionado.descricao}</p>
            <p
              className={`mb-4 ${
                ticketSelecionado.status === "Finalizado"
                  ? "text-green-400"
                  : "text-orange-400"
              }`}
            >
              Status: {ticketSelecionado.status}
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setModal(null)}
                className="px-3 py-1 rounded border border-gray-600"
              >
                Fechar
              </button>
              {ticketSelecionado.status !== "Finalizado" && (
                <button className="px-3 py-1 rounded bg-red-500">Finalizar</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
