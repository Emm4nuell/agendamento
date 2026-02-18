package br.com.agendamento.features.agendamento.controller;

import br.com.agendamento.features.agendamento.dto.request.AgendamentoResponse;
import br.com.agendamento.features.agendamento.dto.response.CancelaAgendamentoRequest;
import br.com.agendamento.features.agendamento.service.AgendamentoService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;


@RestController
@RequestMapping("/v1")
@RequiredArgsConstructor
public class AgendamentoController {

    private final AgendamentoService agendamentoService;

    @GetMapping("/agendamentos")
    public ResponseEntity<Page<AgendamentoResponse>> getAgendamentos(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "15") int size,
            @RequestParam(name = "sort", defaultValue = "nome") String sort,
            @RequestParam(name = "direction", defaultValue = "asc") String direction) {
        Pageable pageable = PageRequest.of(
                page,
                size,
                Sort.by(Sort.Direction.fromString(direction), sort));
        Page<AgendamentoResponse> response = agendamentoService.getAgendamentos(pageable);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<Void> saveAgendamento(@RequestBody CancelaAgendamentoRequest cancelaAgendamentoRequest) {
        var response = agendamentoService.saveCancelaAgendamento(cancelaAgendamentoRequest);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(response.getId())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}
