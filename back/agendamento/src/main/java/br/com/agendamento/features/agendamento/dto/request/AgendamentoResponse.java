package br.com.agendamento.features.agendamento.dto.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class AgendamentoResponse {
    private Long id;
    private String paciente;
    private String tipoBeneficiario;
    private String status;
    private String data;
    private String hora;
    private String profissional;
    private String especialidade;
    private String local;
    private String situacao;
    private String acoes;
}
