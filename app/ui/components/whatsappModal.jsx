"use client"

import { useState } from "react";

export default function WhatsappModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <button
        onClick={() => setIsOpen(true)}
        className="z-50 cursor-pointer fixed rounded-full border border-emerald-300 p-2 shadow-lg right-5 bottom-25 hover:scale-105 transition"
      >
        <img className="w-7 h-7" src="/whatsicon.svg" alt="Whatsapp Icon" />
      </button>

      {isOpen && (
        <div className="z-2000 fixed right-8 bottom-8 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <div className="bg-black p-6 rounded-lg shadow-lg w-80 relative">
            <button
              className="cursor-pointer absolute top-2 right-2 text-white hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-2 text-emerald-400">Atendimento via WhatsApp</h2>
            <p className="mb-4 text-sm">
              Clique no botão abaixo para iniciar uma conversa com nosso suporte.
            </p>
            <a
              href="https://wa.me/5511932123875?text=Olá%20gostaria%20de%20saber%20sobre%20os%20serviços%20da%20Athon%20Networks!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-md w-full text-center block"
            >
              Falar com o suporte
            </a>
          </div>
        </div>
      )}
    </>
  );
}
