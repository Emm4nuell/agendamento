export interface AgendamentoType {
  id: number;
  paciente: string;
  tipoBeneficiario: "Titular" | "Dependente";
  status: "Confirmado" | "Pendente" | "Cancelado";
  data: string;
  hora: string;
  profissional: string;
  especialidade: string;
  local: string;
  situacao:
    | "Agendado"
    | "Aguardando"
    | "Atendido"
    | "Cancelado"
    | "Marcado"
    | "Não Compareceu"
    | "Vencido";
  acoes?: string;
}
