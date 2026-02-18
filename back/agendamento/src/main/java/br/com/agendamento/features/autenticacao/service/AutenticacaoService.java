package br.com.agendamento.features.autenticacao.service;

import br.com.agendamento.features.autenticacao.dto.AutenticacaoRequest;
import br.com.agendamento.features.autenticacao.dto.AutenticacaoResponse;
import br.com.agendamento.features.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AutenticacaoService {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AutenticacaoResponse token(AutenticacaoRequest autenticacaoRequest) {
        Authentication authentication =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(autenticacaoRequest.getUsuario(), autenticacaoRequest.getSenha()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        var token = jwtService.gerarToken(autenticacaoRequest.getUsuario());
        return AutenticacaoResponse.builder()
                                   .token(token)
                                   .build();
    }
}
