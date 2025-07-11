import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Globe } from "lucide-react";

import WhatsappModal from "../ui/components/whatsappModal";
import BottomMenu from "../ui/components/bottomMenu";

export default function Home() {
  return (
    <div className="minh-screen p-5 text-sm flex flex-col gap-5">
      
      <WhatsappModal />

      {/* Header */}
      <header>
        <div className="flex items-center gap-1">
          <Image width={70} height={70} src="/logo.ico" alt="" />

          <div className="">
            <h1>Bem vindo, Pablo!</h1>
            <p className="text-gray-400">Meu ID: 12211</p>
          </div>
        </div>
      </header>

      {/* Plans */}
      <div className="flex flex-col gap-6">
        <button className="bg-blue-900 px-3 py-3 rounded-lg flex items-center justify-between">
          <p>Plano Athon Turbo | ID 119269</p>
          <ArrowDown />
        </button>

        <div className="bg-blue-900 p-3 rounded-lg flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-black">
              <Globe />
            </div>

            <p>Plano Athon Turbo 400MB</p>
            <p>
              400MB/ <span className="text-gray-400">ID32131A / DSD0322</span>
            </p>
          </div>

          <div className="flex flex-col items-end gap-3">
            <span>R$ 104,90</span>
            <button className="rounded-full bg-orange-500 py-1 px-3">
              Ver Plano
            </button>
            <p className="text-green-400">Ativo</p>
          </div>
        </div>
      </div>

      {/* Faturas */}
      <div>
        <div className="flex items-center justify-between">
          <span>Última Fatura</span>
          <a className="text-blue-300" href="#">
            Ver todas
          </a>
        </div>

        <div>
          <div className="bg-blue-900 p-3 rounded-lg flex items-center justify-between mt-2">
            <div className="flex flex-col gap-3">
              <p className="font-bold">R$ 104,90</p>
              <p>Vencimento: 15/01/2025</p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <span className="text-green-400">Paga</span>
            </div>
          </div>
        </div>
      </div>

      {/* Assinaturas */}

      <div>
        <div className="flex items-center justify-between">
          <span>Assinaturas</span>
          <a className="text-blue-300" href="#">
            Ver todas
          </a>
        </div>

        <div className="bg-blue-900 p-3 rounded-lg mt-2">
          <p className="text-gray-400">Nenhuma assinatura ativa</p>
        </div>
      </div>

      <BottomMenu />
    </div>
  );
}
