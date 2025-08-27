"use client";

import React, { useState } from "react";

export default function LoginForm() {
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User:", user);
    console.log("Senha:", senha);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-xs text-sm">
      <div className="flex flex-col">

        <div className="relative">
          <input
            type="text"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Usuário"
            className="w-full p-3 rounded border-1 border-white focus:outline-none text-white placeholder:text-white"
          />

          <span className="absolute right-3 top-3">
            {/* Ícone usuário (poderia ser SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A9.004 9.004 0 0112 15a9.004 9.004 0 016.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="relative">
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            className="w-full p-3 rounded border-1 border-white focus:outline-none text-white placeholder:text-white"
          />
          <span className="absolute right-3 top-3">
            {/* Ícone olho (poderia ser SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="bg-linear-to-t from-sky-500 to-indigo-500 rounded-lg cursor-pointer p-0.5 shadow-lg shadow-blue-500/50 hover:from-purple-500 hover:to-sky-500 transition duration-300">
        <button type='submit' className="bg-black w-full text-white px-4 py-2 rounded-lg duration-700 cursor-pointer">
          Login
        </button>
      </div>

      <a href="#" className="text-white/70 text-center mt-2">
        Esqueci minha senha →
      </a>
    </form>
  );
}
