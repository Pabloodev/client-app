import Image from "next/image";
import { Globe, BadgeQuestionMark, ArrowDown, BadgeInfo, Headset, BadgeCheck } from "lucide-react";


import BottomMenu from "../ui/components/bottomMenu";

export default function Home() {
  return (
    <div className="minh-screen p-5 text-sm flex flex-col gap-5 text-white/90">
      {/* Header */}
      <header>
        <div className="flex items-center gap-1">
          <Image width={70} height={70} src="/logo.ico" alt="" />

          <div>
            <h1 className="text-white">Bem vindo, Pablo!</h1>
            <p className="text-gray-400">Meu ID: 12211</p>
          </div>
        </div>
      </header>

      {/* Plans */}
      <div className="flex flex-col gap-6">
        <button className="border border-gray-500 hover:bg-white/5 px-3 py-3 rounded-lg flex items-center justify-between">
          <p>Plano Athon Turbo | ID 119269</p>
          <ArrowDown />
        </button>

        <div className="border border-gray-500 hover:bg-white/5 p-3 rounded-lg flex items-center justify-between">
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
          <a className="teborder border-gray-500 hover:bg-white/5" href="#">
            Ver todas
          </a>
        </div>

        <div>
          <div className="border border-gray-500 hover:bg-white/5 p-3 rounded-lg flex items-center justify-between mt-2">
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

      <div>
        <div className="flex items-center justify-between">
          <span>Serviços</span>
          <a href="/services" className="text-sm text-white hover:text-white">Ver todos</a>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-3">
          <div className="cursor-pointer border border-gray-500 rounded-lg p-3 flex flex-col items-center hover:bg-white/5">
            <Globe className="text-green-400" />
            <p className="mt-2 text-sm">Tracking</p>
            <span className="text-green-400 text-xs">Ativo</span>
          </div>
          <div className="cursor-pointer border border-gray-500 rounded-lg p-3 flex flex-col items-center hover:bg-white/5">
            <Headset className="text-gray-400" />
            <p className="mt-2 text-sm">Câmeras</p>
            <span className="text-gray-400 text-xs">Não contratado</span>
          </div>
          <div className="cursor-pointer border border-gray-500 rounded-lg p-3 flex flex-col items-center hover:bg-white/5">
            <BadgeInfo className="text-gray-400" />
            <p className="mt-2 text-sm">Firewall</p>
            <span className="text-gray-400 text-xs">Não contratado</span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <span>Tickets</span>
          <a className="teborder border-gray-500 hover:bg-white/5" href="#">
            Menu de tickets
          </a>
        </div>

        <ul className="p-4 rounded-lg mt-2 flex items-center gap-3 justify-center text-sm">
          <li className="flex-1 min-w-[100px] hover:bg-white/5 cursor-pointer border p-2 rounded-lg border-gray-400 flex flex-col items-center">
            <BadgeQuestionMark />
            <p className="text-gray-400">Em aberto</p>
          </li>
          <li className="flex-1 min-w-[100px] hover:bg-white/5 cursor-pointer border p-2 rounded-lg border-gray-400 flex flex-col items-center">
            <BadgeInfo />
            <p className="text-gray-400">Em andamento</p>
          </li>
          <li className="flex-1 min-w-[100px] hover:bg-white/5 cursor-pointer border p-2 rounded-lg border-gray-400 flex flex-col items-center">
            <BadgeCheck />
            <p className="text-gray-400">Finalizados</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
