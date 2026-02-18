package br.com.agendamento.features.autenticacao.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class AutenticacaoResponse {
    private String token;
}
