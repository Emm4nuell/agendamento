package br.com.agendamento.features.agendamento.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CancelaAgendamentoRequest {
    private Long id;
    private String motivo;
}
