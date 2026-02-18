package br.com.agendamento.shared.enums;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public enum AgendamentoStatus {

    AGENDADO(1, "Agendado"),
    AGUARDANDO(2, "Aguardando"),
    ATENDIDO(3, "Atendido"),
    CANCELADO(4, "Cancelado"),
    MARCADO(5, "Marcado"),
    NAO_COMPARECEU(6, "Não Compareceu"),
    VENCIDO(7, "Vencido");

    private final int code;
    private final String label;
}
