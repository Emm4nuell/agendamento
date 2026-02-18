package br.com.agendamento.features.agendamento.dto.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CancelaAgendamentoResponse {
    private Long id;
    private String motivo;
}
