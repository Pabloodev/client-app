import { Globe, Headset } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen p-5 text-sm flex flex-col gap-5 text-white/90">
      <h1 className="text-lg font-bold">Meus Serviços</h1>

      <div className="grid grid-cols-2 gap-4">
        {/* Serviço contratado */}
        <div className="border border-gray-500 rounded-lg p-4 flex flex-col justify-between hover:bg-white/5">
          <div className="flex items-center gap-3">
            <Globe className="text-green-400" />
            <p>Tracking</p>
          </div>
          <p className="text-green-400 text-sm mt-2">Ativo</p>
          <button className="mt-3 px-3 py-1 rounded-full bg-orange-500 text-sm">
            Gerenciar
          </button>
        </div>

        {/* Serviço não contratado */}
        <div className="border border-gray-500 rounded-lg p-4 flex flex-col justify-between hover:bg-white/5">
          <div className="flex items-center gap-3">
            <Headset className="text-gray-400" />
            <p>Câmeras</p>
          </div>
          <p className="text-gray-400 text-sm mt-2">Não contratado</p>
          <button className="mt-3 px-3 py-1 rounded-full bg-green-500 text-sm text-black">
            Contratar
          </button>
        </div>
      </div>
    </div>
  );
}