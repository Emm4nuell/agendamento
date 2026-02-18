package br.com.agendamento.features.autenticacao.dto;

import lombok.Getter;

@Getter
public class AutenticacaoRequest {
    private String usuario;
    private String senha;
}
