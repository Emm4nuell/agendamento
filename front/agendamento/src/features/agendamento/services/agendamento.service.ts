import type { AgendamentoType } from "@/features/agendamento/types/AgendamentoType";
import { api } from "@/services/api";
import type { PageableType } from "../types/PageableType";
import type { CancelaAgendamentoType } from "../types/CancelaAgendamento";

export const agendamentoService = {
  async listar(
    page = 0,
    size = 15,
    sort = "nome",
    direction = "asc",
  ): Promise<PageableType<AgendamentoType> | undefined> {
    try {
      const response = await api.get<PageableType<AgendamentoType>>(
        "/agendamentos",
        {
          params: { page, size, sort, direction },
        },
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao listar agendamentos:", error);
      return;
    }
  },

  async cancelaAgendamento(agendamento: CancelaAgendamentoType) {
    try {
      await api.post("", agendamento);
    } catch (error) {
      console.error("Erro ao cancelar agendamento:", error);
    }
  },
};
