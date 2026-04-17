import { api } from "@/services/api";
import type { AutenticacaoType } from "../types/LoginType";
import type { AutenticaType } from "../types/autenticaType";

export const autenticacaoService = {
  async login(autenticacao: AutenticacaoType): Promise<string | undefined> {
    try {
      const response = await api.post(
        "/agendamento-atendente/publico/usuario/login",
        autenticacao,
      );
      const authHeader = response.headers["authorization"];
      if (!authHeader) {
        console.error("Token não veio no header!");
        return;
      }
      const token = authHeader.replace("Bearer ", "");
      console.log("TOKEN:", token);
      return token;
    } catch (error:any) {
      throw error;
    }
  },

  async autenticacao(): Promise<AutenticaType | undefined> {
    try {
      const response = await api.get<AutenticaType>(
        "/agendamento-atendente/adm/usuario/autenticado",
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("ERRO: ", error);
      return;
    }
  },
};
