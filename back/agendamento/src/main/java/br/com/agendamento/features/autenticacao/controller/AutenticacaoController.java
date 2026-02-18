package br.com.agendamento.features.autenticacao.controller;

import br.com.agendamento.features.autenticacao.dto.AutenticacaoRequest;
import br.com.agendamento.features.autenticacao.dto.AutenticacaoResponse;
import br.com.agendamento.features.autenticacao.service.AutenticacaoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v1")
@RequiredArgsConstructor
public class AutenticacaoController {

    private final AutenticacaoService autenticacaoService;

    @PostMapping("/autenticacao")
    public ResponseEntity<AutenticacaoResponse> autentica(@RequestBody AutenticacaoRequest autenticacaoRequest) {
        return ResponseEntity.status(HttpStatus.OK).body(autenticacaoService.token(autenticacaoRequest));
    }

}
