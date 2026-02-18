import { api } from "@/services/api";
import type { TokenType } from "../types/TokenType";
import type { AutenticacaoType } from "../types/AutenticacaoType";

export const autenticacaoService = {
  async autenticacao(
    autenticacao: AutenticacaoType,
  ): Promise<TokenType | undefined> {
    try {
      const response = await api.post<TokenType>(
        "/autenticacao",
        autenticacao,
        { headers: { "Content-Type": "application/json" } },
      );
      return response.data;
    } catch (error) {
      console.log("ERRO: ", error);
      return;
    }
  },
};
