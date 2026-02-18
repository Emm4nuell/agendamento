package br.com.agendamento.features.agendamento.dto.request;

import lombok.Builder;

import java.util.List;

@Builder(toBuilder = true)
public class AgendamentoPageResponse<T> {
    private List<AgendamentoResponse> content;
    private int pageNumber;
    private int pageSize;
    private long totalElements;
    private int totalPages;
}
