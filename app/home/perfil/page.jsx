import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="minh-screen p-5 text-sm flex flex-col gap-5 text-white/90">
      {/* Header */}
      <header>
        <div className="flex items-center gap-1">
          <Image width={70} height={70} src="/logo.ico" alt="" />

          <div>
            <h1 className="text-white">Pablo Teixeira</h1>
            <p className="text-gray-400">Meu ID: 12211</p>          
            <p className="text-gray-400">Rua tarumã, 2 - Taquacetuba</p>
          </div>
        </div>
      </header>

      {/* Plans */}
      <div className="flex flex-col gap-3">
        <button className="cursor-pointer border border-gray-500 hover:bg-white/5 px-3 py-3 rounded-lg flex items-center justify-between">
          <p>Dados cadastrais</p>
          <ArrowDown />
        </button>

        <button className="cursor-pointer border border-gray-500 hover:bg-white/5 px-3 py-3 rounded-lg flex items-center justify-between">
          <p>Trocar senha do app</p>
          <ArrowDown />
        </button>

        <button className="cursor-pointer border border-gray-500 hover:bg-white/5 px-3 py-3 rounded-lg flex items-center justify-between">
          <p>Politica de privacidade</p>
          <ArrowDown />
        </button>

        <button className="cursor-pointer hover:text-red-400 border transition duration-300 border-gray-500 hover:bg-white/5 px-3 py-3 rounded-lg flex items-center justify-between">
          <p>Sair do App</p>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
