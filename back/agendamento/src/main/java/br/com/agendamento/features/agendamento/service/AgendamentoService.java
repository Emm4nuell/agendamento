package br.com.agendamento.features.agendamento.service;

import br.com.agendamento.features.agendamento.dto.request.AgendamentoResponse;
import br.com.agendamento.features.agendamento.dto.response.CancelaAgendamentoRequest;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@AllArgsConstructor
public class AgendamentoService {

    @Transactional
    public AgendamentoResponse saveCancelaAgendamento(CancelaAgendamentoRequest cancelaAgendamentoRequest) {
//                pegar o id do agendamento e verificar o status
//                pegar o id do beneficiario e verificazr se o agendamento é dele
//                verificar se o prazo de cancelamento extrapolou do limite
        return null;
    }

    @Transactional(readOnly = true)
    public Page<AgendamentoResponse> getAgendamentos(Pageable pageable) {
        var agendamentos = List.of(
                AgendamentoResponse.builder()
                                   .id(1L)
                                   .paciente("João Silva")
                                   .tipoBeneficiario("Titular")
                                   .status("Confirmado")
                                   .data("20/02/2026")
                                   .hora("08:30")
                                   .profissional("Dr. Carlos Almeida")
                                   .especialidade("Cardiologia")
                                   .local("Clínica Centro")
                                   .situacao("Agendado")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(2L)
                                   .paciente("Maria Souza")
                                   .tipoBeneficiario("Dependente")
                                   .status("Pendente")
                                   .data("21/02/2026")
                                   .hora("09:00")
                                   .profissional("Dra. Fernanda Lima")
                                   .especialidade("Dermatologia")
                                   .local("Hospital Vida")
                                   .situacao("Aguardando")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(3L)
                                   .paciente("Pedro Santos")
                                   .tipoBeneficiario("Titular")
                                   .status("Cancelado")
                                   .data("22/02/2026")
                                   .hora("10:15")
                                   .profissional("Dr. Ricardo Melo")
                                   .especialidade("Ortopedia")
                                   .local("Clínica OrtoMais")
                                   .situacao("Cancelado")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(4L)
                                   .paciente("Ana Oliveira")
                                   .tipoBeneficiario("Dependente")
                                   .status("Confirmado")
                                   .data("23/02/2026")
                                   .hora("11:00")
                                   .profissional("Dra. Paula Andrade")
                                   .especialidade("Pediatria")
                                   .local("Clínica Infantil")
                                   .situacao("Marcado")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(5L)
                                   .paciente("Lucas Pereira")
                                   .tipoBeneficiario("Titular")
                                   .status("Confirmado")
                                   .data("24/02/2026")
                                   .hora("13:30")
                                   .profissional("Dr. Marcelo Costa")
                                   .especialidade("Neurologia")
                                   .local("Hospital Central")
                                   .situacao("Agendado")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(6L)
                                   .paciente("Juliana Rocha")
                                   .tipoBeneficiario("Dependente")
                                   .status("Pendente")
                                   .data("25/02/2026")
                                   .hora("14:00")
                                   .profissional("Dra. Camila Torres")
                                   .especialidade("Ginecologia")
                                   .local("Clínica Mulher")
                                   .situacao("Não Compareceu")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(7L)
                                   .paciente("Rafael Martins")
                                   .tipoBeneficiario("Titular")
                                   .status("Confirmado")
                                   .data("26/02/2026")
                                   .hora("15:45")
                                   .profissional("Dr. Eduardo Ramos")
                                   .especialidade("Urologia")
                                   .local("Hospital São Lucas")
                                   .situacao("Atendido")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(8L)
                                   .paciente("Camila Alves")
                                   .tipoBeneficiario("Dependente")
                                   .status("Cancelado")
                                   .data("27/02/2026")
                                   .hora("16:00")
                                   .profissional("Dra. Renata Gomes")
                                   .especialidade("Endocrinologia")
                                   .local("Clínica Saúde Total")
                                   .situacao("Cancelado")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(9L)
                                   .paciente("Bruno Carvalho")
                                   .tipoBeneficiario("Titular")
                                   .status("Confirmado")
                                   .data("28/02/2026")
                                   .hora("08:00")
                                   .profissional("Dr. André Barros")
                                   .especialidade("Oftalmologia")
                                   .local("Centro Oftalmo")
                                   .situacao("Vencido")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(10L)
                                   .paciente("Patrícia Lima")
                                   .tipoBeneficiario("Dependente")
                                   .status("Pendente")
                                   .data("01/03/2026")
                                   .hora("09:30")
                                   .profissional("Dra. Silvia Nunes")
                                   .especialidade("Psiquiatria")
                                   .local("Clínica Mente Viva")
                                   .situacao("Agendado")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(11L)
                                   .paciente("Fernando Dias")
                                   .tipoBeneficiario("Titular")
                                   .status("Confirmado")
                                   .data("02/03/2026")
                                   .hora("10:00")
                                   .profissional("Dr. Gustavo Freitas")
                                   .especialidade("Clínico Geral")
                                   .local("Hospital Esperança")
                                   .situacao("Atendido")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(12L)
                                   .paciente("Larissa Melo")
                                   .tipoBeneficiario("Dependente")
                                   .status("Cancelado")
                                   .data("03/03/2026")
                                   .hora("11:45")
                                   .profissional("Dra. Bianca Lopes")
                                   .especialidade("Otorrinolaringologia")
                                   .local("Clínica Vida Plena")
                                   .situacao("Não Compareceu")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(13L)
                                   .paciente("Thiago Costa")
                                   .tipoBeneficiario("Titular")
                                   .status("Confirmado")
                                   .data("04/03/2026")
                                   .hora("13:00")
                                   .profissional("Dr. Henrique Azevedo")
                                   .especialidade("Gastroenterologia")
                                   .local("Hospital Regional")
                                   .situacao("Marcado")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(14L)
                                   .paciente("Amanda Ribeiro")
                                   .tipoBeneficiario("Dependente")
                                   .status("Pendente")
                                   .data("05/03/2026")
                                   .hora("14:30")
                                   .profissional("Dra. Vanessa Castro")
                                   .especialidade("Reumatologia")
                                   .local("Clínica Bem Estar")
                                   .situacao("Agendado")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(15L)
                                   .paciente("Diego Fernandes")
                                   .tipoBeneficiario("Titular")
                                   .status("Confirmado")
                                   .data("06/03/2026")
                                   .hora("15:00")
                                   .profissional("Dr. Leandro Batista")
                                   .especialidade("Pneumologia")
                                   .local("Hospital Vida Nova")
                                   .situacao("Atendido")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(16L)
                                   .paciente("Beatriz Moraes")
                                   .tipoBeneficiario("Dependente")
                                   .status("Confirmado")
                                   .data("07/03/2026")
                                   .hora("08:45")
                                   .profissional("Dra. Tatiane Moura")
                                   .especialidade("Hematologia")
                                   .local("Clínica Saúde Integral")
                                   .situacao("Marcado")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(17L)
                                   .paciente("Gabriel Lopes")
                                   .tipoBeneficiario("Titular")
                                   .status("Cancelado")
                                   .data("08/03/2026")
                                   .hora("09:15")
                                   .profissional("Dr. Marcos Vinícius")
                                   .especialidade("Oncologia")
                                   .local("Hospital São Miguel")
                                   .situacao("Cancelado")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(18L)
                                   .paciente("Carla Teixeira")
                                   .tipoBeneficiario("Dependente")
                                   .status("Confirmado")
                                   .data("09/03/2026")
                                   .hora("10:30")
                                   .profissional("Dra. Priscila Andrade")
                                   .especialidade("Nefrologia")
                                   .local("Clínica Renal")
                                   .situacao("Agendado")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(19L)
                                   .paciente("Leonardo Araújo")
                                   .tipoBeneficiario("Titular")
                                   .status("Pendente")
                                   .data("10/03/2026")
                                   .hora("11:00")
                                   .profissional("Dr. Paulo Sérgio")
                                   .especialidade("Infectologia")
                                   .local("Hospital Municipal")
                                   .situacao("Vencido")
                                   .acoes("")
                                   .build(),

                AgendamentoResponse.builder()
                                   .id(20L)
                                   .paciente("Isabela Martins")
                                   .tipoBeneficiario("Dependente")
                                   .status("Confirmado")
                                   .data("11/03/2026")
                                   .hora("14:00")
                                   .profissional("Dra. Daniela Rocha")
                                   .especialidade("Cirurgia Geral")
                                   .local("Clínica Cirúrgica")
                                   .situacao("Atendido")
                                   .acoes("")
                                   .build()
        );

        int start = (int) pageable.getOffset();
        int end = Math.min(start + pageable.getPageSize(), agendamentos.size());

        List<AgendamentoResponse> subList = agendamentos.subList(start, end);

        return new PageImpl<>(subList, pageable, agendamentos.size());

    }
}
