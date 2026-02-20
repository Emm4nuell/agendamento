import TabelaAgendamento from "./table-agendamento";

export default function ListarAgendamento() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-2 pt-0">
      <div className="text-[15px] grid grid-cols-3 auto-rows-min gap-4 md:grid-cols-6 md:text-[20px]">
        <div className="bg-yellow-500 h-20 rounded-xl text-white font-bold flex justify-center items-center">
          <div className="text-center flex flex-col">
            <span>Agendado</span>
            <span>1</span>
          </div>
        </div>

        <div className="bg-green-500 h-20 rounded-xl text-white font-bold flex justify-center items-center">
          <div className="text-center flex flex-col">
            <span>Atendido</span>
            <span>1</span>
          </div>
        </div>

        <div className="bg-red-500 h-20 rounded-xl text-white font-bold flex justify-center items-center">
          <div className="text-center flex flex-col">
            <span>Cancelado</span>
            <span>1</span>
          </div>
        </div>

        <div className="bg-black h-20 rounded-xl text-white font-bold flex justify-center items-center">
          <div className="text-center flex flex-col">
            <span>Vencido</span>
            <span>1</span>
          </div>
        </div>

        <div className="bg-blue-500 h-20 rounded-xl text-white font-bold flex justify-center items-center">
          <div className="text-center flex flex-col">
            <span>Marcado</span>
            <span>1</span>
          </div>
        </div>

        <div className="bg-pink-500 h-20 rounded-xl text-white font-bold flex justify-center items-center">
          <div className="text-center flex flex-col">
            <span>Não Compareceu</span>
            <span>1</span>
          </div>
        </div>
      </div>
      <div className="bg-muted/50 flex-1 rounded-xl md:min-h-min">
        <TabelaAgendamento />
      </div>
    </div>
  );
}
